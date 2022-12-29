---

---

import K from '@site/src/components/K';

# Introduction

The `WITH` clause provides a way to write auxiliary statements for use in a larger query. These statements, which are often referred to as Common Table Expressions or CTEs, can be thought of as defining temporary tables that exist just for one query.

To fully study the `WITH` clause, visit its documentation [https://www.postgresql.org/docs/current/queries-with.html](https://www.postgresql.org/docs/current/queries-with.html)

In this introduction, you learn how to build a CTE from a subquery or from a set of values.

## 1. Build a Common Table Expression (CTE) from a subquery

To get started building a CTE from a subquery, we need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

Initially, we have to prepare a KQuery:

```java
final KQuery kQuery =
    k
    .select(APP_USER.ID)
    .from(APP_USER);
```

At this point, we will proceed to build the CTE. You should start by calling the `cte` method, which receives the name of CTE, as follow:

```java
cte("cte_name")
```

The next step is add columns to CTE through the `columns` method, which receives a variable quantity of `String` which will be added as CTE columns, as follow:

```java
columns("id", "firstName", ...)
```

And finally, we proceed to add the subquery to CTE through the `as` method, as follow:

```java
final KQuery kQuery = ...;

// highlight-next-line
as(kQuery)
```

### Example

Java code:

```java
final KQuery kQueryUsers10400_10500 =
    k
    .select(APP_USER.ID, APP_USER.FIRST_NAME)
    .from(APP_USER)
    .where(APP_USER.ID.bt(10400, 10500));

final KCommonTableExpressionFilled cteUsers10400_10500 = 
        cte("users_10400_10500")
        .columns("id", "firstName")
        .as(kQueryUsers10400_10500);
```

## 2. Build a Common Table Expression (CTE) from a set of values

To get started building a CTE from a set of values, we need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

Initially, we have to prepare the values through the `values` and `append` method:

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

At this point, we will proceed to build the CTE. You should start by calling the `cte` method, which receives the name of CTE, as follow:

```java
cte("cte_name")
```

The next step is add columns to CTE through the `columns` method, which receives a variable quantity of `String` which will be added as CTE columns, as follow:

```java
columns("id", "firstName", ...)
```

And finally, we proceed to add the values to CTE through the `as` method, as follow:

```java
final KValues kValues = ...;

as(kValues)
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
    .as(userValues);
```