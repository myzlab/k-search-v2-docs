---
title: And Not
sidebar_label: And Not
---

## Definition

The `andNot` methods allows you to add an `AND NOT` operator to a `HAVING` clause.

The methods available to use this functionality are:

- `andNot(KCondition kCondition)`: Receives a [`KCondition`](/docs/kcondition/introduction) which will be added to `HAVING` clause with an `AND NOT` operator.
- `andNot(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `HAVING` clause with an `AND NOT` operator.

## Method hierarchy

The `andNot` method can be used right after the following methods:

- [`having`](/docs/select-statement/having/)
- [`and`](/docs/select-statement/having/and)
- [`andNot`](/docs/select-statement/having/and-not)
- [`or`](/docs/select-statement/having/or)
- [`orNot`](/docs/select-statement/having/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/select-statement/having/and)
- [`andNot`](/docs/select-statement/having/and-not)
- [`or`](/docs/select-statement/having/or)
- [`orNot`](/docs/select-statement/having/or-not)
- [`window`](/docs/select-statement/select/)
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)
- [`orderBy`](/docs/select-statement/order-by/)
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