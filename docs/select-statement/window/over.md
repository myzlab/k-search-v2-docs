---
title: Over
sidebar_label: Over
---

## Definition

The `over` method allows you to add the `OVER` clause to the query. The `OVER` clause allows you to specify a set of rows (through a [window definition](/docs/select-statement/window/introduction#build-a-window-definition)) on which a window function or an aggregate function will operate.

The only one method available to use this functionality is in the [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) object and it is:

- `over(KWindowDefinitionAllowedToOver kWindowDefinitionAllowedToOver)`: Receives a [window definition](/docs/select-statement/window/introduction#build-a-window-definition) which will be supplied to the [`OVER`](/docs/select-statement/window/over) clause.

:::tip

If the supplied window definition has a name, it needs to be defined in the `WINDOW` clause, otherwise, just use it directly in the `OVER` method.

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