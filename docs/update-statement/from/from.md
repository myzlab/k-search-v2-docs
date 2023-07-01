---
title: From
sidebar_label: From
---

## Definition

The `from` methods allows you to add the `USING` clause to the query.

The methods available to use this functionality are:

- `from(KTable kTable)`: Receives a [`KTable`](/docs/misc/ktable) which will be added to `USING` clause. This clause accepts the 2 types of [`KTable`](/docs/misc/ktable).
- `from(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `USING` clause.
- `from(KCommonTableExpressionFilled kCommonTableExpressionFilled)`: Receives a [`KCommonTableExpressionFilled`](/docs/misc/cte) which will be added to `USING` clause.

## Method hierarchy

The `from` method can be used right after the following methods:

- [`set`](/docs/update-statement/set/), [`from`](/docs/update-statement/from/)

and the subsequent methods that can be called are:

- [`from`](/docs/update-statement/from/), [`where`](/docs/update-statement/where/), [`returning`](/docs/update-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KTable` (_generated.metadata_)

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.from(ROLE)
.where(APP_USER.ROLE_ID.eq(ROLE.ID))
.and(ROLE.ID.eq(7L))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = au.last_name
FROM role ro
WHERE au.role_id = ro.id
AND ro.id = ?1
```

Parameters:

- **?1:** 7

## Example: `KTable` (from subquery)

Java code:

```java
final KTable subquery =
    k
    .select(ROLE.ID)
    .from(ROLE)
    .where(ROLE.ID.eq(7L))
    .as("r");

k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.from(subquery)
.where(APP_USER.ROLE_ID.eq(subquery.c("id")))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = au.last_name
FROM (
    SELECT ro.id
    FROM role ro
    WHERE ro.id = ?1
) r
WHERE au.role_id = r.id
```

Parameters:

- **?1:** 7

## Example: `KTable` (from subquery with custom aliases in a tuple)

Java code:

```java
final KTable subquery =
    k
    .select(ROLE.ID, ROLE.NAME)
    .from(ROLE)
    .where(ROLE.ID.eq(7L))
    .as("r", "a", "b");

k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, subquery.c("b"))
.from(subquery)
.where(APP_USER.ROLE_ID.eq(subquery.c("a")))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = r.b
FROM (
    SELECT ro.id
    FROM role ro
    WHERE ro.id = ?1
) r (a, b)
WHERE au.role_id = r.a
```

Parameters:

- **?1:** 7

## Example: `KRaw`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.from(raw("role ro"))
.where(raw("au.role_id = ro.id"))
.and(ROLE.ID.eq(7L))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = au.last_name
FROM role ro
WHERE au.role_id = ro.id
AND ro.id = ?1
```

Parameters:

- **?1:** 7

## Example: `KCommonTableExpressionFilled`

Java code:

```java
final KValues userIdsValues =
    values()
    .append(new ArrayList<>() {{
        add(10605L);
    }})
    .append(new ArrayList<>() {{
        add(13L);
    }});

final KCommonTableExpressionFilled userIdsCte =
    cte("user_ids_cte")
    .columns("id")
    .as(userIdsValues, "uic");

k
.with(userIdsCte)
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.from(userIdsCte)
.where(userIdsCte.c("id").eq(APP_USER.ID))
.execute();
```

SQL generated:

```sql
WITH user_ids_cte (id) AS (
    VALUES (?1), (?2)
) 
UPDATE app_user au
SET first_name = au.last_name
FROM user_ids_cte uic
WHERE uic.id = au.id
```

Parameters:

- **?1:** 10605
- **?2:** 13