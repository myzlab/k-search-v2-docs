---
title: Common Table Expressions
sidebar_label: Common Table Expressions
---

import K from '@site/src/components/K';

## Definition

A common table expression (CTE) is a temporary result set which you can reference within another SQL statement including `SELECT`, `INSERT`, `UPDATE` or `DELETE`. In Java, we will see a CTE as the `KCommonTableExpressionFilled` object.

We will explain below how to build a `KCommonTableExpressionFilled` object from a subquery and from a set of values.

## Build a `KCommonTableExpressionFilled` (CTE) from a subquery

A CTE is made up of the name, one or more columns, and a `KGenericQuery`. To define these values you have available the following methods which must be called one after the other in the same order that will be presented below:

### 1. `cte(String name)`

- **name:** is the name of the CTE.

### 2. `columns(String... columns)` (optional)

- **columns:** are all the columns that will be added to the CTE.

### 3. `as(KGenericQuery kGenericQuery, String alias)`

- **kGenericQuery:** is a subquery which will be added to the CTE.  
- **alias:** which is the alias that will be assigned to the CTE when it is used in a FROM clause.

To use `cte` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
final KGenericQuery kQueryUsers10400_10500 =
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

### 1. `cte(String name)`

- **name:** is the name of the CTE.

### 2. `columns(String... columns)` (optional)

- **columns:** are all the columns that will be added to the CTE.

### 3. `as(`[`KValues`](/docs/misc/kvalues) `kValues, String alias)`

- **kValues:** are all the values that will be supplied to the `VALUES` clause.  
- **alias:** which is the alias that will be assigned to the CTE when it is used in a FROM clause.

Receives a KValues and an alias, which will be added as values in the CTE.

To use `cte` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

Additionally, we need to prepare the values that will be supplied to the `as` method through the `values` and `append` method:

### 1. `values()`

- Allows you to initialize a list of values. It does not receive parameters.

### 2. `append(List<Object> value)`

- **value:**  which is a list of objects which will correspond to one single record within the CTE.

:::tip

The `append` method can be called as many times as records you need to add to the CTE.

:::

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

## Example

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

It is very likely that you will need to use a CTE and its columns in other clauses, such as `SELECT` list, `FROM` clause, `WHERE` clause, etc. This can be achieved through the following available methods:

### 1. `column(String name)`

Allow you to generate a column from your CTE.

- **name:** is the name of the column to generate and returns a new `KColumn` that can be used in any other clause. This `KColumn` has the peculiarity that it already includes the CTE alias.

### 2. `c(String name)`

Allow you to generate a column from your CTE.

- **name:** is the name of the column to generate and returns a new `KColumn` that can be used in any other clause. This `KColumn` has the peculiarity that it already includes the CTE alias.

### 3. `on(`[`KCondition`](/docs/misc/kcondition/introduction) `kCondition)`

This method allows the CTE to be added to a join.

- **kCondition:** which contains all the information about the join.

### 4. `on(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

This method allows the CTE to be added to a join.

- **kRaw:** is a raw content which contains all the information about the join.

Also, a `KCommonTableExpressionFilled` can be used directly in the `FROM` clause and `USING` clause due of the alias that is supplied to it.