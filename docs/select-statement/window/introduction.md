---
title: Window clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The `WINDOW` clause provides a way of operates on a [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/introduction) through a window function or through aggregate function, without reducing the number of rows returned by the query.

To fully study the `WINDOW` clause, visit its documentation [https://www.postgresql.org/docs/current/tutorial-window.html](https://www.postgresql.org/docs/current/tutorial-window.html)

To use this functionality, we will divide the procedure into 2 parts.

- **1**: Choose the function to apply. This can be a window function or an aggregate function function. To see the full list of available aggregation functions and window functions, please visit the [`Aggregate Functions`](/docs/sql-functions/aggregate-functions/introduction) section and the [`Window Functions`](/docs/sql-functions/window-functions/introduction) section respectively.
- **2**: Build a window definition that will define the rules on which the chosen function will work.

In this introduction, you will learn how to build a window definition.

## Build a window definition

A CTE is made up of the name, one or more columns, and a KQuery. To define these values you have available the following methods which must be called one after the other in the same order that will be presented below:

- `cte(String name)`: Receives the name of the CTE.
- `columns(String... columns)`: Receives a variable quantity of `String` which will be added as CTE columns. (Call this method is optional).
- `as(KValues kValues, String alias)`: Receives a KValues and an alias, which will be added as values in the CTE.

To use `cte` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

Additionally, we need to prepare the values that will be supplied to the `as` method through the `values` and `append` method:

- `values()`: Allows you to initialize a list of values. It does not receive parameters.
- `append(List<Object> value)`: Receives a list of objects which will correspond to one single record within the CTE. This method can be called as many records need to be added to the CTE.

These methods are called as follows:

```java
final List<Object> recordValues = new ArrayList<>() {{
    add(10450L);
    add("Jhon");
    add("Doe");
}};

final KValues userValues =
// highlight-next-line
    values()
// highlight-next-line
    append(recordValues);
```

### Example

Java code:

```java
final List<Object> userValues1 = new ArrayList<>() {{
    add(10450L);
    add("Jhon");
    add("Dock");
}};

final List<Object> userValues2 = new ArrayList<>() {{
    add(10451L);
    add("Erroll");
    add("Dixon");
}};
    
final KValues userValues = 
    values()
    .append(userValues1)
    .append(userValues2);

final KCommonTableExpressionFilled cteValues = 
    cte("cteValues")
    .columns("id", "firstName", "lastName")
    .as(userValues, "cte_users");
```