---
title: From
sidebar_label: From
---

## Definition

The `from` methods allows you to add the `FROM` clause to the query.

The methods available to use this functionality are:

- `from(KTable kTable)`: Receives a [`KTable`](/docs/select-statement/from/introduction#ktable-types) which will be added to `FROM` clause.
- `from(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `FROM` clause.
- `from(KCommonTableExpressionFilled kCommonTableExpressionFilled)`: Receives a [`KCommonTableExpressionFilled`](/docs/select-statement/with/introduction) which will be added to `FROM` clause.

## Method hierarchy

The `from` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/select/distinct)
- [`select1`](/docs/select-statement/select/select1)
- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)

and the subsequent methods that can be called are:

- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)
- [`where`](/docs/select-statement/where/)
- [`groupBy`](/docs/select-statement/group-by/)
- [`window`](/docs/select-statement/window/)
- [`except`](/docs/select-statement/combining/except)
- [`exceptAll`](/docs/select-statement/combining/except-all)
- [`intersect`](/docs/select-statement/combining/intersect)
- [`intersectAll`](/docs/select-statement/combining/intersect-all)
- [`union`](/docs/select-statement/combining/union)
- [`unionAll`](/docs/select-statement/combining/union-all)
- [`orderBy`](/docs/select-statement/order-by/)
- [`limit`](/docs/select-statement/limit)
- [`offset`](/docs/select-statement/offset)
- [`fetch`](/docs/select-statement/fetch/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `KTable` (_generated.metadata_)

Java code:

```java
k
.select(
    APP_USER.EMAIL
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT au.email
FROM app_user au
```

Parameters:

- None

## Example: `KTable` (from subquery)

Java code:

```java
final KTable kTableUsers =
    k
    .select(APP_USER.ID, APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
    .from(APP_USER)
    .as("us");

k
.select(
    kTableUsers.c("id"),
    kTableUsers.c("first_name"),
    kTableUsers.c("last_name")
)
.from(kTableUsers)
.multiple();
```

SQL generated:

```sql
SELECT us.id, us.first_name, us.last_name
FROM (
    SELECT au.id, au.first_name, au.last_name 
    FROM app_user au
) us
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.select(
    APP_USER.EMAIL
)
.from(raw("app_user au"))
.multiple();
```

SQL generated:

```sql
SELECT au.email
FROM app_user au
```

Parameters:

- None

## Example: `KCommonTableExpressionFilled`

Java code:

```java
final `KGenericQuery` kQueryNewUsers =
    k
    .select(APP_USER.ID, APP_USER.FIRST_NAME)
    .from(APP_USER)
    .where(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(1)));
        
final KCommonTableExpressionFilled cteNewUsers = 
    cte("new_users")
    .columns("id", "first_name")
    .as(kQueryNewUsers, "nu");

k
.with(cteNewUsers)
.select(cteNewUsers.c("id"), cteNewUsers.c("first_name"))
.from(cteNewUsers)
.multiple();
```

SQL generated:

```sql
WITH new_users (id, first_name) AS (
    SELECT au.id, au.first_name
    FROM app_user au
    WHERE au.created_at > ?1
)
SELECT nu.id, nu.first_name
FROM new_users nu
```

Parameters:

- **?1:** 2022-12-29T09:40:53.510482