---
title: Window
sidebar_label: Window
---

## Definition

The `window` method allows you to add the `WINDOW` clause to the query. The `WINDOW` clause allows you to define multiples [window definition](/docs/misc/window-definition) that can be referenced in `OVER` clause.

## Available methods

- `window(KWindowDefinitionAllowedToWindow... KWindowDefinitionsAllowedToWindow)`: Receives a variable quantity of [named window definitions](/docs/misc/window-definition) that will be added to the [`WINDOW`](/docs/select-statement/window/) clause.

## Method hierarchy

The `window` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/select/distinct), [`select1`](/docs/select-statement/select/select1), [`select`](/docs/select-statement/select/), [`from`](/docs/select-statement/from/), [`innerJoin`](/docs/select-statement/join/inner-join), [`leftJoin`](/docs/select-statement/join/left-join), [`rightJoin`](/docs/select-statement/join/right-join), [`fullJoin`](/docs/select-statement/join/full-join), [`crossJoin`](/docs/select-statement/join/cross-join), [`where`](/docs/select-statement/where/), [`groupBy`](/docs/select-statement/group-by/), [`having`](/docs/select-statement/having/), [`window`](/docs/select-statement/window/)

and the subsequent methods that can be called are:

- [`window`](/docs/select-statement/window/), [`except`](/docs/select-statement/combining/except), [`exceptAll`](/docs/select-statement/combining/except-all), [`intersect`](/docs/select-statement/combining/intersect), [`intersectAll`](/docs/select-statement/combining/intersect-all), [`union`](/docs/select-statement/combining/union), [`unionAll`](/docs/select-statement/combining/union-all), [`orderBy`](/docs/select-statement/order-by/), [`limit`](/docs/select-statement/limit), [`offset`](/docs/select-statement/offset), [`fetch`](/docs/select-statement/fetch/), [`single`](/docs/select-statement/select/), [`multiple`](/docs/select-statement/select/)

## Example

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