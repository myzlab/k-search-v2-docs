---
title: Window clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The `WINDOW` clause provides a way of operates on a [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/introduction) through a window function or through aggregate function, without reducing the number of rows returned by the query.

To fully study the `WINDOW` clause, visit its documentation [https://www.postgresql.org/docs/current/tutorial-window.html](https://www.postgresql.org/docs/current/tutorial-window.html)

To use this functionality, we will divide the procedure into 2 parts.

- **1**: Choose the function to apply. This can be a window function or an aggregate function. To see the full list of available aggregation functions and window functions, please visit the [`Aggregate Functions`](/docs/sql-functions/aggregate-functions/introduction) section and the [`Window Functions`](/docs/sql-functions/window-functions/introduction) section respectively.
- **2**: Build a window definition that will define the rules on which the chosen function will work.

In this introduction, you will learn how to build a window definition.

## Build a window definition

A window definition is made up of the name, a `PARTITION BY` clause, a `ORDER BY` clause and a frame clause. 

:::tip

If a window definition doesn't have a name, just use it in the `SELECT` clause.

If a window definition has a name, it is required to be used in both the `SELECT` clause and the `WINDOW` clause for proper operation.

:::

To fully study window definition, visit its documentation [https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS](https://www.postgresql.org/docs/current/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS)

 To start building a window definition and define its possible values you have available the following methods which must be called one after the other in the same order that will be presented below:

- `wd()`: Allows you to initialize a window definition without a name. It does not receive parameters. (The name can be assigned later through the `name` method).
- `wd(String name)`: Allows you to initialize a window definition with a name. (The name is optional and can be omitted calling the `wd` method without parameters).
- `name(String name)`: Allows you to assign a name to an unnamed window definition. (Call this method is optional).
- `partitionBy(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `PARTITION BY` clause. (Call this method is optional).
- `orderBy(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `ORDER BY` clause. (Call this method is optional).
- `orderBy(KColumnOrdered kColumnOrdered)`: Receives a [`KColumnOrdered`](/docs/select-statement/select/introduction#2-kcolumn) which will be supplied to the `ORDER BY` clause. (Call this method is optional).

Up to this point, we have defined the name, the `PARTITION BY` clause, and the `ORDER BY` clause. The next step is defined the frame clause (It is optional).

In this sense, initially we have to choose between `RANGE`, `ROWS` or `GROUPS` options, through one following methods:

- `range()`: Allows you to add the RANGE clause to the frame definition. It does not receive parameters.
- `rows()`: Allows you to add the ROWS clause to the frame definition. It does not receive parameters.
- `groups()`: Allows you to add the GROUPS clause to the frame definition. It does not receive parameters. (This clause can be used only when the `ORDER BY` clause is present).

Next step is choice the _frame start_ between `UNBOUNDED PRECEDING`, `offset PRECEDING`, `CURRENT ROW` or `offset FOLLOWING` options, through one following methods:

- `unboundedPreceding()`: Allows you to add the `UNBOUNDED PRECEDING` clause to the frame definition. It does not receive parameters.
- `preceding(int offset)`: Allows you to add the `PRECEDING` clause to the frame definition. Receives the offset which will be supplied to the `PRECEDING` clause.
- `currentRow()`: Allows you to add the `CURRENT ROW` clause to the frame definition. It does not receive parameters.
- `following(int offset)`: Allows you to add the `FOLLOWING` clause to the frame definition. Receives the offset which will be supplied to the `FOLLOWING` clause.

Then, we have to choice the _frame end_ between `UNBOUNDED FOLLOWING`, `offset PRECEDING`, `CURRENT ROW` or `offset FOLLOWING` options, through one following methods (The _frame end_ is optional):

- `unboundedFollowing()`: Allows you to add the `UNBOUNDED FOLLOWING` clause to the frame definition. It does not receive parameters.
- `preceding(int offset)`: Allows you to add the `PRECEDING` clause to the frame definition. Receives the offset which will be supplied to the `PRECEDING` clause.
- `currentRow()`: Allows you to add the `CURRENT ROW` clause to the frame definition. It does not receive parameters.
- `following(int offset)`: Allows you to add the `FOLLOWING` clause to the frame definition. Receives the offset which will be supplied to the `FOLLOWING` clause.

And the last step is choose the _frame_exclusion_ between `EXCLUDE CURRENT ROW`, `EXCLUDE GROUP`, `EXCLUDE TIES` or `EXCLUDE NO OTHERS` options, through one following methods (The _frame_exclusion_ is optional):

- `excludeCurrentRow()`: Allows you to add the `EXCLUDE CURRENT ROW` clause to the frame definition. It does not receive parameters.
- `excludeGroup()`: Allows you to add the `EXCLUDE GROUP` clause to the frame definition. It does not receive parameters.
- `excludeTies()`: Allows you to add the `EXCLUDE TIES` clause to the frame definition. It does not receive parameters.
- `excludeNoOthers()`: Allows you to add the `EXCLUDE NO OTHERS` clause to the frame definition. It does not receive parameters.

To use `wd` methods, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: Unnamed, no extra clause added and no frame clause added

- Name: 𐄂
- Partition by: 𐄂
- Order by: 𐄂
- Range, Rows, Groups: 𐄂
- Frame start: 𐄂
- Frame end: 𐄂
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionUnnamed wdu1 = wd();
```

### Example: Named, no extra clause added and no frame clause added

- Name: 🗸
- Partition by: 𐄂
- Order by: 𐄂
- Range, Rows, Groups: 𐄂
- Frame start: 𐄂
- Frame end: 𐄂
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionNamed wdn1 = wd("the_name");
```

### Example: Unnamed, partitioned and no frame clause added

- Name: 𐄂
- Partition by: 🗸
- Order by: 𐄂
- Range, Rows, Groups: 𐄂
- Frame start: 𐄂
- Frame end: 𐄂
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionUnnamedPartitioned wdu2 = 
    wd()
    .partitionBy(toChar(APP_USER.CREATED_AT, "YYYY"));
```

### Example: Named, partitioned, ordered and no frame clause added

- Name: 🗸
- Partition by: 🗸
- Order by: 🗸
- Range, Rows, Groups: 𐄂
- Frame start: 𐄂
- Frame end: 𐄂
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionNamedOrdered wdn2 =
    wd("the_name")
    .partitionBy(toChar(APP_USER.CREATED_AT, "YYYY"))
    .orderBy(APP_USER.CREATED_AT.desc());
```

### Example: Unnamed, ordered and no frame clause added

- Name: 🗸
- Partition by: 𐄂
- Order by: 🗸
- Range, Rows, Groups: 𐄂
- Frame start: 𐄂
- Frame end: 𐄂
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionUnnamedOrdered wdu3 = 
    wd()
    .orderBy(APP_USER.CREATED_AT.desc());
```

### Example: Named, partitioned, ordered and rows frame with current row start.

- Name: 🗸
- Partition by: 🗸
- Order by: 🗸
- Range, Rows, Groups: 🗸
- Frame start: 🗸
- Frame end: 𐄂
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionNamedFrameStarted wdn3 =
    wd()
    .name("the_name")
    .partitionBy(toChar(APP_USER.CREATED_AT, "YYYY"))
    .orderBy(APP_USER.CREATED_AT.desc())
    .rows()
    .currentRow();
```

### Example: Named, no extra clause added and range frame with unbounded preceding start and current row end.

- Name: 🗸
- Partition by: 𐄂
- Order by: 𐄂
- Range, Rows, Groups: 🗸
- Frame start: 🗸
- Frame end: 🗸
- Frame exclusion: 𐄂

Java code:

```java
final KWindowDefinitionNamedFrameEnded wdn4 =
    wd()
    .name("the_name")
    .range()
    .unboundedPreceding()
    .currentRow();
```

### Example: Unnamed, ordered and groups frame with current row start and excluding current row.

- Name: 𐄂
- Partition by: 𐄂
- Order by: 🗸
- Range, Rows, Groups: 🗸
- Frame start: 🗸
- Frame end: 𐄂
- Frame exclusion: 🗸

Java code:

```java
final KWindowDefinitionUnnamedFrameExcluded wdu4 = 
    wd()
    .orderBy(APP_USER.CREATED_AT.desc())
    .groups()
    .currentRow()
    .excludeCurrentRow();
```

### Example: Named, partitioned, ordered and rows frame with preceding start, following end and excluding current row.

- Name: 🗸
- Partition by: 🗸
- Order by: 🗸
- Range, Rows, Groups: 🗸
- Frame start: 🗸
- Frame end: 🗸
- Frame exclusion: 🗸

Java code:

```java
final KWindowDefinitionNamedFrameExcluded wdn5 =
    wd("the_name")
    .partitionBy(toChar(APP_USER.CREATED_AT, "YYYY"))
    .orderBy(APP_USER.CREATED_AT)
    .rows()
    .preceding(2)
    .following(3)
    .excludeCurrentRow();
```