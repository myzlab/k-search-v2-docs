---
title: Count Distinct
sidebar_label: Count Distinct
---

## Definition

The `countDistinct` method allows you to add the `COUNT(DISTINCT expression)` function to the query. The `COUNT(DISTINCT expression)` function returns the number of rows returned by a `SELECT` statement. However, it does not consider NULL values in the expression and does not consider repeated values.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `countDistinct()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `COUNT` function.

### Example

Java code:

```java
k
.select(APP_USER.ID.countDistinct())
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT COUNT(DISTINCT au.id)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `countDistinct(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `COUNT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(countDistinct(APP_USER.ID))
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT COUNT(DISTINCT au.id)
FROM app_user au
```

Parameters:

- None