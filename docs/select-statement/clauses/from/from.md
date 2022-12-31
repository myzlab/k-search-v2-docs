---
title: From
sidebar_label: From
---

## Definition

The `from` methods allows you to add a `FROM` clause to the query.

The methods available to use this functionality are:

- `from(KTable kTable)`: Receives a [`KTable`](/docs/select-statement/clauses/from/introduction) which will be added to `FROM` clause.
- `from(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/clauses/select/introduction#7-kraw) which will be added to `FROM` clause.
- `from(KCommonTableExpressionFilled kCommonTableExpressionFilled)`: Receives a [`KCommonTableExpressionFilled`](/docs/select-statement/clauses/with/introduction) which will be added to `FROM` clause.

## Method hierarchy

The `from` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/clauses/select/distinct)
- [`select1`](/docs/select-statement/clauses/select/select1)
- [`select`](/docs/select-statement/clauses/select/)
- [`from`](/docs/select-statement/clauses/from/)
- [`innerJoin`](/docs/select-statement/clauses/with)
- [`leftJoin`](/docs/select-statement/clauses/with)
- [`rightJoin`](/docs/select-statement/clauses/with)
- [`fullJoin`](/docs/select-statement/clauses/with)
- [`crossJoin`](/docs/select-statement/clauses/with)

and the subsequent methods that can be called are:

- [`from`](/docs/select-statement/clauses/from/)
- [`innerJoin`](/docs/select-statement/clauses/with)
- [`leftJoin`](/docs/select-statement/clauses/with)
- [`rightJoin`](/docs/select-statement/clauses/with)
- [`fullJoin`](/docs/select-statement/clauses/with)
- [`crossJoin`](/docs/select-statement/clauses/with)
- [`where`](/docs/select-statement/clauses/select/)
- [`groupBy`](/docs/select-statement/clauses/select/)
- [`window`](/docs/select-statement/clauses/select/)
- [`except`](/docs/select-statement/clauses/select/)
- [`exceptAll`](/docs/select-statement/clauses/select/)
- [`intersect`](/docs/select-statement/clauses/select/)
- [`intersectAll`](/docs/select-statement/clauses/select/)
- [`union`](/docs/select-statement/clauses/select/)
- [`unionAll`](/docs/select-statement/clauses/select/)
- [`orderBy`](/docs/select-statement/clauses/select/)
- [`limit`](/docs/select-statement/clauses/select/)
- [`offset`](/docs/select-statement/clauses/select/)
- [`fetch`](/docs/select-statement/clauses/select/)
- [`single`](/docs/select-statement/clauses/select/)
- [`multiple`](/docs/select-statement/clauses/select/)

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

```sql showLineNumbers
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

```sql showLineNumbers
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

```sql showLineNumbers
SELECT au.email
FROM app_user au
```

Parameters:

- None

## Example: `KCommonTableExpressionFilled`

Java code:

```java
final KQuery kQueryNewUsers =
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

```sql showLineNumbers
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