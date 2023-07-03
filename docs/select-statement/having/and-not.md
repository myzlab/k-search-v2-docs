---
title: And Not
sidebar_label: And Not
---

## Definition

The `andNot` methods allows you to add the `AND NOT` operator to a `HAVING` clause.

## Available methods

### 1. `andNot(`[`KCondition`](/docs/misc/kcondition/introduction) `kCondition)`

- **kCondition:** which contains all the information about the condition that will be added to the `HAVING` clause with an `AND NOT` operator.

### 2. `andNot(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

- **kRaw:** is a raw content which will be added in the `HAVING` clause with an `AND NOT` operator.

## Method hierarchy

The `andNot` method can be used right after the following methods:

- [`having`](/docs/select-statement/having/), [`and`](/docs/select-statement/having/and), [`andNot`](/docs/select-statement/having/and-not), [`or`](/docs/select-statement/having/or), [`orNot`](/docs/select-statement/having/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/select-statement/having/and), [`andNot`](/docs/select-statement/having/and-not), [`or`](/docs/select-statement/having/or), [`orNot`](/docs/select-statement/having/or-not), [`window`](/docs/select-statement/window/), [`except`](/docs/select-statement/combining/except), [`exceptAll`](/docs/select-statement/combining/except-all), [`intersect`](/docs/select-statement/combining/intersect), [`intersectAll`](/docs/select-statement/combining/intersect-all), [`union`](/docs/select-statement/combining/union), [`unionAll`](/docs/select-statement/combining/union-all), [`orderBy`](/docs/select-statement/order-by/), [`limit`](/docs/select-statement/limit), [`offset`](/docs/select-statement/offset), [`fetch`](/docs/select-statement/fetch/), [`single`](/docs/select-statement/select/), [`multiple`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.select(
    count().as("all"),
    APP_USER.EMAIL.countDistinct().as("distinctEmail"),
    toChar(APP_USER.CREATED_AT, "YYYY").as("year")
)
.from(APP_USER)
.groupBy(raw("year"))
.having(count().greaterThan(120))
.andNot(APP_USER.EMAIL.countDistinct().greaterThan(70))
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*) AS "all",
    COUNT(DISTINCT au.email) AS "distinctEmail",
    TO_CHAR(au.created_at, ?1) AS "year"
FROM app_user au
GROUP BY year
HAVING COUNT(*) > ?2
AND NOT (COUNT(DISTINCT au.email) > ?3)
```

Parameters:

- **?1:** "YYYY
- **?2:** 120
- **?3:** 70

## Example: `KRaw`

Java code:

```java
k
.select(
    count().as("all"),
    APP_USER.EMAIL.countDistinct().as("distinctEmail"),
    toChar(APP_USER.CREATED_AT, "YYYY").as("year")
)
.from(APP_USER)
.groupBy(raw("year"))
.having(raw("COUNT(*) > 120"))
.andNot(raw("COUNT(DISTINCT au.email) > 70"))
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*) AS "all",
    COUNT(DISTINCT au.email) AS "distinctEmail",
    TO_CHAR(au.created_at, ?1) AS "year"
FROM app_user au
GROUP BY year
HAVING COUNT(*) > 120
AND NOT (COUNT(DISTINCT au.email) > 70)
```

Parameters:

- **?1:** "YYYY