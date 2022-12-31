---

---

import K from '@site/src/components/K';

# Introduction

The `FROM` clause specifies one or more source tables for the `SELECT` statement. In Java, we will see a table as the [`KTable`](/docs/select-statement/from/introduction) object.

To fully study the `FROM` clause, visit its documentation [https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM](https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM)

There are 2 types of [`KTable`](/docs/select-statement/from/introduction):

- Those that are generated automatically and found in the _generated.metadata_ package, which refer directly to a table in the database. [Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)
- Those that are built from a subquery. These do not reference a table in the database.

## Build a `KTable` from a subquery

To get started building a [`KTable`](/docs/select-statement/from/introduction) from a subquery, we need to prepare a `KQuery`:

```java
final KQuery subquery =
    k
    .select(APP_USER.ID)
    .from(APP_USER);
```

and then via the `as` method we supply an alias and the `KQuery` becomes a [`KTable`](/docs/select-statement/from/introduction), as follows:

```java
final KTable kTable = subquery.as("an_alias");
```

## Methods available in a `KTable`

A [`KTable`](/docs/select-statement/from/introduction) has the following methods available:

- `column(String name)`: Allow you to generate a column from your [`KTable`](/docs/select-statement/from/introduction). Receives the name of the column to generate and returns a new `KColumn` that can be used in any other clause. This `KColumn` has the peculiarity that it already includes the [`KTable`](/docs/select-statement/from/introduction) alias.
- `c(String name)`: This method does the same as method `column` but with a shorter name.
- `on(KCondition kCondition)`: This method allows the [`KTable`](/docs/select-statement/from/introduction) to be added to a join through the condition that is received by parameter. (To learn more about the conditions, please go to the [`KConditions`](/docs/conditions/eq) section).
- `on(KRaw kRaw)`: This method allows the [`KTable`](/docs/select-statement/from/introduction) to be added to a join through the [`KRaw`](/docs/select-statement/select/introduction#7-kraw) that is received by parameter.

:::tip

The `c` and `column` methods are only really useful in those KTable that are built from a subquery.

:::