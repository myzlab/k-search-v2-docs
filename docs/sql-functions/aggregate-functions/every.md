---
title: Every
sidebar_label: Every
---

## Definition

The `every` method allows you to add a `EVERY` function to the query. The `EVERY` is a function that returns the “logical AND” of all specified non-null boolean input values. That is, this function returns true if all non-null input values ​​are true, and otherwise returns false (Equivalent to [`BOOL_AND`](/docs/sql-functions/aggregate-functions/bool-and)).

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) is:

- `every()`: It does not receive any parameters. The [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) that invokes the method will be the one supplied to the `EVERY` function.

### Example

Java code:

```java
k
.select(
    APP_USER.ID.every(),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    EVERY(au.id),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `every(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `EVERY` function.
- `every(KCondition kCondition)`: Receives a [`KCondition`](/docs/kcondition/introduction) which will be supplied to the `EVERY` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    every(APP_USER.ID),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    EVERY(au.id),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None