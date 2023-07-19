---
title: Window Definition
sidebar_label: Window Definition
---

import K from '@site/src/components/K';

## Definition

Contains all the information needed to add a window function to the query.

## Build the window definition

A window definition is made up of the name, a `PARTITION BY` clause, a `ORDER BY` clause and a frame clause. 

:::tip

If a window definition doesn't have a name, just use it in the `SELECT` clause.

If a window definition has a name, it is required to be used in both the `SELECT` clause and the `WINDOW` clause for proper operation.

:::

To start building a window definition and define its possible values you have available the following methods which must be called one after the other in the same order that will be presented below:

### 1. `wd()`

Allows you to initialize a window definition without a name. (The name can be assigned later through the `name` method).

- It does not receive any parameters.

### 2. `wd(String name)`

Allows you to initialize a window definition with a name. (The name is optional and can be omitted calling the `wd` method without parameters)

- **name:** is the name of the window definition.

### 3. `name(String name)`

Allows you to assign a name to an unnamed window definition. (Call this method is optional).

- **name:** is the name of the window definition.

### 4. `partitionBy(KColumn kColumn)`

- **KColumn:** are all the expresions that will be supplied to the `PARTITION BY` clause. (Call this method is optional).  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn)

### 5. `orderBy(KColumn kColumn)`

- **KColumn:** are all the expresions that will be supplied to the `ORDER BY` clause. (Call this method is optional).  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn)

### 6. `orderBy(KColumnOrdered kColumnOrdered)`

- **KColumnOrdered:** are all the expresions that will besupplied to the `ORDER BY` clause. (Call this method is optional).  
Among the possible values are: [`KColumnOrdered`](/docs/misc/select-list-values#2-kcolumn)

To use `wd` methods, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Build the frame clause

Up to this point, we have defined the name, the `PARTITION BY` clause, and the `ORDER BY` clause.  
The next step is defined the frame clause (It is optional).

In this sense, initially we have to choose between `RANGE`, `ROWS` or `GROUPS` options, through one following methods:

### 1. `range()`

Allows you to add the RANGE clause to the frame definition.

- It does not receive parameters.

### 2. `rows()`

Allows you to add the ROWS clause to the frame definition.

- It does not receive parameters.

### 3. `groups()`

Allows you to add the GROUPS clause to the frame definition. (This clause can be used only when the `ORDER BY` clause is present).

- It does not receive parameters.

##  Frame start

Next step is choice the frame start between `UNBOUNDED PRECEDING`, `offset PRECEDING`, `CURRENT ROW` or `offset FOLLOWING` options, through one following methods:

### 1. `unboundedPreceding()`

Allows you to add the `UNBOUNDED PRECEDING` clause to the frame definition.

- It does not receive parameters.

### 2. `preceding(int offset)`

Allows you to add the `PRECEDING` clause to the frame definition.

- **offset:** which will be supplied to the `PRECEDING` clause.

### 3. `currentRow()`

Allows you to add the `CURRENT ROW` clause to the frame definition.

- It does not receive parameters.

### 4. `following(int offset)`

Allows you to add the `FOLLOWING` clause to the frame definition.

- **offset:** which will be supplied to the `FOLLOWING` clause.

##  Frame end

Then, we have to choice the frame end between `UNBOUNDED FOLLOWING`, `offset PRECEDING`, `CURRENT ROW` or `offset FOLLOWING` options, through one following methods (The frame end is optional):

### 1. `unboundedFollowing()`

Allows you to add the `UNBOUNDED FOLLOWING` clause to the frame definition.

- It does not receive parameters.

### 2. `preceding(int offset)`

Allows you to add the `PRECEDING` clause to the frame definition.

- **offset:** which will be supplied to the `PRECEDING` clause.

### 3. `currentRow()`

Allows you to add the `CURRENT ROW` clause to the frame definition.

- It does not receive parameters.

### 4. `following(int offset)`

Allows you to add the `FOLLOWING` clause to the frame definition.

- **offset:** which will be supplied to the `FOLLOWING` clause.

##  Frame exclusion

And the last step is choose the frame_excl sion_ beteen `EXCLUDE CURRENT ROW`, `EXCLUDE GROUP`, `EXCLUDE TIES` or `EXCLUDE NO OTHERS` options, through one following methods (The frame exclusion is optional):

### 1. `excludeCurrentRow()`

Allows you to add the `EXCLUDE CURRENT ROW` clause to the frame definition.

- It does not receive parameters.

### 2. `excludeGroup()`

Allows you to add the `EXCLUDE GROUP` clause to the frame definition.

- It does not receive parameters.

### 3. `excludeTies()`

Allows you to add the `EXCLUDE TIES` clause to the frame definition.

- It does not receive parameters.

### 4. `excludeNoOthers()`

Allows you to add the `EXCLUDE NO OTHERS` clause to the frame definition.

- It does not receive parameters.

## Example: Unnamed

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

## Example: Named

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

## Example: Unnamed and partitioned

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

## Example: Named, partitioned and ordered

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

## Example: Unnamed and ordered

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

## Example: Named, partitioned, ordered and rows frame with current row start.

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

## Example: Named and range frame with unbounded preceding start and current row end.

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

## Example: Unnamed, ordered and groups frame with current row start and excluding current row.

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

## Example: Named, partitioned, ordered and rows frame with preceding start, following end and excluding current row.

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