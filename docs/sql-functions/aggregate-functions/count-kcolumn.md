---
title: Count (KColumn)
sidebar_label: Count (KColumn)
---

## Definition

The `count` method allows you to add a `COUNT(expression)` function to the query. 

The `COUNT(expression)` function returns the number of rows returned by a [`SELECT`](/docs/select-statement/select/introduction) statement. However, it does not consider NULL values in the expression.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) is:

- `count()`: It does not receive any parameters. The [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) that invokes the method will be the one supplied to the `COUNT` function.

### Example

Java code:

```java
k
.select(APP_USER.ID.count())
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT COUNT(au.id)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `count(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `COUNT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(count(APP_USER.ID))
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT COUNT(au.id)
FROM app_user au
```

Parameters:

- None