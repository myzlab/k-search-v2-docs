---
title: USING clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`USING`](/docs/delete-statement/using/introduction) clause allows you emulate delete join operations.

To successfully emulate a delete joins operations, first, specify the table expression using [`USING`](/docs/delete-statement/using/introduction) clause. It can be one or several tables.
Then, use columns from the tables that appear in the [`USING`](/docs/delete-statement/using/introduction) clause in the [`WHERE`](/docs/delete-statement/where/introduction) clause to join data.

## `KTable` types

This clause accepts 2 types of [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types):

- Those that are generated automatically and found in the _generated.metadata_ package, which refer directly to a table in the database. [Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)
- Those that are built from a subquery. These do not reference a table in the database.

## Build a `KTable` from a subquery

To get started building a [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) from a subquery, you need to prepare a new `KQuery` and then through the `as` method you supply an alias and so the `KQuery` becomes a [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types), as follows:

```java
final KTable kTable =
    k
    .select(APP_USER.ID)
    .from(APP_USER)
    .as("an_alias");
```

## Methods available in a `KTable`

A [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) has the following methods available:

- `column(String name)`: Allow you to generate a column from your [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types). Receives the name of the column to generate and returns a new `KColumn` that can be used in any other clause. This `KColumn` has the peculiarity that it already includes the [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) alias.
- `c(String name)`: This method does the same as method `column` but with a shorter name.
- `on(KCondition kCondition)`: This method allows the [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) to be added to a join through the [`KCondition`](/docs/kcondition/introduction) that is received by parameter.
- `on(KRaw kRaw)`: This method allows the [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) to be added to a join through the [`KRaw`](/docs/select-statement/select/introduction#7-kraw) that is received by parameter.

:::tip

The `c` and `column` methods are only really useful in those KTable that are built from a subquery.

:::