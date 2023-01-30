---
title: KTable
sidebar_label: KTable
---

import K from '@site/src/components/K';

## Definition

A `KTable` object references a database table.

## `KTable` types

There are 2 types of [`KTable`](/docs/misc/ktable):

- __Generated__: Those that are generated automatically and found in the _generated.metadata_ package, which refer directly to a table in the database. [Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)
- __Subquery__: Those that are built from a subquery. These do not reference a table in the database.

## Build a `KTable` from a subquery

To get started building a [`KTable`](/docs/misc/ktable) from a subquery, you need to prepare a `KQuery` and then through the `as` method you supply an alias and so the `KQuery` becomes a [`KTable`](/docs/misc/ktable), as follows:

```java
final KTable kTable =
    k
    .select(APP_USER.ID)
    .from(APP_USER)
    .as("an_alias");
```

## Methods available in a `KTable`

A [`KTable`](/docs/misc/ktable) has the following methods available:

- `column(String name)`: Allow you to generate a column from your [`KTable`](/docs/misc/ktable). Receives the name of the column to generate and returns a new `KColumn` that can be used in any other clause. This `KColumn` has the peculiarity that it already includes the [`KTable`](/docs/misc/ktable) alias.
- `c(String name)`: This method does the same as method `column` but with a shorter name.
- `on(KCondition kCondition)`: This method allows the [`KTable`](/docs/misc/ktable) to be added to a join through the [`KCondition`](/docs/misc/kcondition/introduction) that is received by parameter.
- `on(KRaw kRaw)`: This method allows the [`KTable`](/docs/misc/ktable) to be added to a join through the [`KRaw`](/docs/misc/select-list-values#7-kraw) that is received by parameter.

:::tip

The `c` and `column` methods are only really useful in those KTable that are built from a subquery.

:::