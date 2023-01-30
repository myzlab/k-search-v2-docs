---
title: WITH clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The `WITH` clause provides a way to write auxiliary statements for use in a larger query. These statements, which are often referred to as Common Table Expressions or CTEs, can be thought of as defining temporary tables that exist just for one query. In Java, we will see a CTE as the `KCommonTableExpressionFilled` object.

To fully study the `WITH` clause, visit its documentation [https://www.postgresql.org/docs/current/queries-with.html](https://www.postgresql.org/docs/current/queries-with.html)

In this introduction, you learn how to build a CTE from a subquery and from a set of values.

## Build a `KCommonTableExpressionFilled` (CTE) from a subquery

A CTE is made up of the name, one or more columns, and a `KGenericQuery`. To define these values you have available the following methods which must be called one after the other in the same order that will be presented below:

- `cte(String name)`: Receives the name of the CTE.
- `columns(String... columns)`: Receives a variable quantity of `String` which will be added as CTE columns.
- `as(`KGenericQuery` `KGenericQuery`, String alias)`: Receives a `KGenericQuery` and an alias, which will be added as a subquery in the CTE.

To use `cte` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
final `KGenericQuery` kQueryUsers10400_10500 =
    k
    .select(APP_USER.ID, APP_USER.FIRST_NAME)
    .from(APP_USER)
    .where(APP_USER.ID.bt(10400, 10500));

final KCommonTableExpressionFilled cteUsers10400_10500 = 
        cte("users_10400_10500")
        .columns("id", "firstName")
        .as(kQueryUsers10400_10500, "cte_users");
```

## Build a `KCommonTableExpressionFilled` (CTE) from a set of values

A CTE is made up of the name, one or more columns, and a `KGenericQuery`. To define these values you have available the following methods which must be called one after the other in the same order that will be presented below:

- `cte(String name)`: Receives the name of the CTE.
- `columns(String... columns)`: Receives a variable quantity of `String` which will be added as CTE columns. (Call this method is optional).
- `as(KValues kValues, String alias)`: Receives a KValues and an alias, which will be added as values in the CTE.

To use `cte` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

Additionally, we need to prepare the values that will be supplied to the `as` method through the `values` and `append` method:

- `values()`: Allows you to initialize a list of values. It does not receive parameters.
- `append(List<Object> value)`: Receives a list of objects which will correspond to one single record within the CTE. This method can be called as many times as records you need to add to the CTE.

These methods are called as follows:

```java
final List<Object> recordValues = new ArrayList<>() {{
    add(10450L);
    add("Jhon");
    add("Doe");
}};

final KValues userValues =
    values()
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

## How to use a `KCommonTableExpressionFilled` and its columns in other clauses?

It is very likely that you will need to use a CTE and its columns in other clauses, such as [`SELECT`](/docs/select-statement/select/introduction) list, `FROM` clause, `WHERE` clause, `USING`, etc. This can be achieved through the following available methods:

- `column(String name)`: Allow you to generate a column from your CTE. Receives the name of the column to generate and returns a new `KColumn` that can be used in any other clause. This `KColumn` has the peculiarity that it already includes the CTE alias.
- `c(String name)`: This method does the same as method `column` but with a shorter name.
- `on(KCondition kCondition)`: This method allows the CTE to be added to a join through the [`KCondition`](/docs/kcondition/introduction) that is received by parameter.
- `on(KRaw kRaw)`: This method allows the CTE to be added to a join through the [`KRaw`](/docs/select-statement/select/introduction#7-kraw) that is received by parameter.

Also, a `KCommonTableExpressionFilled` can be used directly in a `FROM` clause because of the alias that is supplied to it.