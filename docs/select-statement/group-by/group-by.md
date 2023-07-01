---
title: Group By
sidebar_label: Group By
---

## Definition

The `groupBy` method allows you to add the `GROUP BY` clause to the query.

The only one method available to use this functionality is:

- `groupBy(KColumnAllowedToGroupBy... kColumnsAllowedToGroupBy)`: Receives a variable quantity of columns that will be added to the `GROUP BY` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`KRaw`](/docs/misc/select-list-values#7-kraw).

## Method hierarchy

The `groupBy` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/select/distinct), [`select1`](/docs/select-statement/select/select1), [`select`](/docs/select-statement/select/), [`from`](/docs/select-statement/from/), [`innerJoin`](/docs/select-statement/join/inner-join), [`leftJoin`](/docs/select-statement/join/left-join), [`rightJoin`](/docs/select-statement/join/right-join), [`fullJoin`](/docs/select-statement/join/full-join), [`crossJoin`](/docs/select-statement/join/cross-join), [`where`](/docs/select-statement/where/)

and the subsequent methods that can be called are:

- [`having`](/docs/select-statement/having/), [`window`](/docs/select-statement/window/), [`except`](/docs/select-statement/combining/except), [`exceptAll`](/docs/select-statement/combining/except-all), [`intersect`](/docs/select-statement/combining/intersect), [`intersectAll`](/docs/select-statement/combining/intersect-all), [`union`](/docs/select-statement/combining/union), [`unionAll`](/docs/select-statement/combining/union-all), [`orderBy`](/docs/select-statement/order-by/), [`limit`](/docs/select-statement/limit), [`offset`](/docs/select-statement/offset), [`fetch`](/docs/select-statement/fetch/), [`single`](/docs/select-statement/select/), [`multiple`](/docs/select-statement/select/)

## Example

Java code:

```java
k
.select(count(), APP_USER.CREATED_AT.cast(date()))
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT COUNT(*), CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## Parameters issue in `GROUP BY` clause

There is an error in JDBC library when using the `GROUP BY` clause with parameters. We will show a first example where you will be able to appreciate the error and then another example with how we should handle the queries to avoid the error and not affect the performance of the generated SQL query.

## Example with the issue

Java code:

```java
k
.select(
    count(),
    toChar(APP_USER.CREATED_AT, "YYYY")
)
.from(APP_USER)
.groupBy(toChar(APP_USER.CREATED_AT, "YYYY"))
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*),
    TO_CHAR(au.created_at, ?1)
FROM app_user au
GROUP BY TO_CHAR(au.created_at, ?2)
```

Parameters:

- **?1:** "YYYY"
- **?2:** "YYYY"

Although when executing the query directly in the database, it gives us the result that the query is correct, when doing it from Java with JDBC, it throws the following error:


```
org.postgresql.util.PSQLException: ERROR: column "au.created_at" must appear in the GROUP BY clause or be used in an aggregate function
```

To avoid this error and keep the same query, we need to add an alias to the expression in the `SELECT` clause and use it in the `GROUP BY` clause as follows:

## Example without the issue

Java code:

```java
k
.select(
    count(),
    toChar(APP_USER.CREATED_AT, "YYYY").as("year")
)
.from(APP_USER)
.groupBy(raw("year"))
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*),
    TO_CHAR(au.created_at, ?1) AS "year"
FROM app_user au
GROUP BY year
```

Parameters:

- **?1:** "YYYY"