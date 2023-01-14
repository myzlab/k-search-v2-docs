---
title: Having
sidebar_label: Having
---

## Definition

The `having` methods allows you to add a `HAVING` clause to the query.

The methods available to use this functionality are:

- `having(KCondition kCondition)`: Receives a [`KCondition`](/docs/kcondition/introduction) which will be added to `HAVING` clause.
- `having(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `HAVING` clause.

## Method hierarchy

The `having` method can be used right after the following methods:

- [`groupBy`](/docs/select-statement/group-by/)

and the subsequent methods that can be called are:

- [`and`](/docs/select-statement/where/and)
- [`andNot`](/docs/select-statement/where/and-not)
- [`or`](/docs/select-statement/where/or)
- [`orNot`](/docs/select-statement/where/or-not)
- [`window`](/docs/select-statement/select/)
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)
- [`orderBy`](/docs/select-statement/select/)
- [`limit`](/docs/select-statement/select/)
- [`offset`](/docs/select-statement/select/)
- [`fetch`](/docs/select-statement/select/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.select(
    count().as("all"),
    toChar(APP_USER.CREATED_AT, "YYYY").as("year")
)
.from(APP_USER)
.groupBy(raw("year"))
.having(count().greaterThan(120))
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*) AS "all",
    TO_CHAR(au.created_at, ?1) AS "year"
FROM app_user au
GROUP BY year
HAVING COUNT(*) > ?2
```

Parameters:

- **?1:** "YYYY
- **?2:** 120

## Example: `KRaw`

Java code:

```java
k
.select(
    count().as("all"),
    toChar(APP_USER.CREATED_AT, "YYYY").as("year")
)
.from(APP_USER)
.groupBy(raw("year"))
.having(raw("COUNT(*) > 120"))
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*) AS "all",
    TO_CHAR(au.created_at, ?1) AS "year"
FROM app_user au
GROUP BY year
HAVING COUNT(*) > 120
```

Parameters:

- **?1:** "YYYY