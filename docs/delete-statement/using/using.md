---
title: Using
sidebar_label: Using
---

## Definition

The `using` methods allows you to add the `USING` clause to the query.

The methods available to use this functionality are:

- `using(KTable kTable)`: Receives a [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) which will be added to `USING` clause.
- `using(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `USING` clause.
- `using(KCommonTableExpressionFilled kCommonTableExpressionFilled)`: Receives a [`KCommonTableExpressionFilled`](/docs/delete-statement/with/introduction) which will be added to `USING` clause.

## Method hierarchy

The `using` method can be used right after the following methods:

- [`deleteFrom`](/docs/delete-statement/delete-from/)
- [`using`](/docs/delete-statement/using/)

and the subsequent methods that can be called are:

- [`using`](/docs/delete-statement/using/)
- [`where`](/docs/delete-statement/where/)
- [`returning`](/docs/delete-statement/returning)
- [`execute`](/docs/select-statement/select/)

## Example: `KTable` (_generated.metadata_)

Java code:

```java
k
.deleteFrom(APP_USER)
.using(ROLE)
.where(APP_USER.ROLE_ID.eq(ROLE.ID))
.and(ROLE.ID.gt(7))
.execute();
```

SQL generated:

```sql
DELETE FROM app_user au
USING role ro
WHERE au.role_id = ro.id
AND ro.id > ?1
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
    .where(ROLE.ID.gt(7))
    .as("r");

k
.deleteFrom(APP_USER)
.using(subquery)
.where(APP_USER.ROLE_ID.eq(subquery2.c("id")))
.execute();
```

SQL generated:

```sql
DELETE FROM app_user au
USING (
    SELECT ro.id
    FROM role ro
    WHERE ro.id > ?
) r
WHERE au.role_id = r.id
```

Parameters:

- **?1:** 7

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(APP_USER)
.using(raw("role ro"))
.where(raw("au.role_id = ro.id"))
.execute();
```

SQL generated:

```sql
DELETE FROM app_user au
USING role ro
WHERE au.role_id = ro.id
```

Parameters:

- None

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
.deleteFrom(APP_USER)
.using(userIdsCte)
.where(userIdsCte.c("id").eq(APP_USER.ID))
.execute();
```

SQL generated:

```sql
WITH user_ids_cte (id) AS (
    VALUES (?1), (?2)
) 
DELETE FROM app_user au
USING user_ids_cte uic
WHERE uic.id = au.id
```

Parameters:

- **?1:** 10605
- **?2:** 13