---
title: Over
sidebar_label: Over
---

## Definition

The `over` method allows you to add the `OVER` clause to the query.

The `OVER` clause allows you to specify a set of rows (through a [window definition](/docs/misc/window-definition)) on which a window function or an aggregate function will operate.

## Available methods calling from a `KWindowFunctionColumn` or a `KAggregateFunctionColumn`

### 1. `over(KWindowDefinitionAllowedToOver kWindowDefinitionAllowedToOver)`

- **kColumnsAllowedToSelect:** is the [window definition](/docs/misc/window-definition) which will be supplied to the `OVER` clause.

:::tip

If the supplied window definition has a name, it needs to be defined in the `WINDOW` clause, otherwise, just use it directly in the `OVER` method.

:::

:::tip

The `KWindowFunctionColumn` object and the `KAggregateFunctionColumn` object are the result of call a window function or an aggregate function.

To see the full list of available aggregation functions and window functions, please visit the [`Aggregate Functions`](/docs/sql-functions/aggregate-functions/introduction) section and the [`Window Functions`](/docs/sql-functions/window-functions/introduction) section.

:::

## Example: Unnamed window definition

Java code:

```java
final KWindowDefinitionUnnamedPartitioned wdu1 =
    wd()
    .partitionBy(APP_USER.ROLE_ID);

k
.select(
    APP_USER.FIRST_NAME,
    rowNumber().over(wdu1)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    ROW_NUMBER() OVER(PARTITION BY au.role_id)
FROM app_user au
```

Parameters:

- None

## Example: Named window definition

Java code:

```java
final KWindowDefinitionUnnamedPartitioned wdn1 =
    wd("the_name")
    .partitionBy(APP_USER.ROLE_ID);

k
.select(
    APP_USER.FIRST_NAME,
    rowNumber().over(wdn1)
)
.from(APP_USER)
.window(wdn1)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    ROW_NUMBER() OVER "the_name"
FROM app_user au
WINDOW "the_name" AS (PARTITION BY au.role_id)
```

Parameters:

- None