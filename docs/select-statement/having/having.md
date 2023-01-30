---
title: Having
sidebar_label: Having
---

## Definition

The `having` methods allows you to add the `HAVING` clause to the query.

The methods available to use this functionality are:

- `having(KCondition kCondition)`: Receives a [`KCondition`](/docs/misc/kcondition/introduction) which will be added to `HAVING` clause.
- `having(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `HAVING` clause.

## Method hierarchy

The `having` method can be used right after the following methods:

- [`groupBy`](/docs/select-statement/group-by/)

and the subsequent methods that can be called are:

- [`and`](/docs/select-statement/having/and)
- [`andNot`](/docs/select-statement/having/and-not)
- [`or`](/docs/select-statement/having/or)
- [`orNot`](/docs/select-statement/having/or-not)
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