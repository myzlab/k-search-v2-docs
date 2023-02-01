---
title: Cardinality
sidebar_label: Cardinality
---

## Definition

The `cardinality` method allows you to add the `CARDINALITY` function to the query. The `CARDINALITY` function is used to returns the total number of elements in the array, or 0 if the array is empty.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `cardinality()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `CARDINALITY` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.arrayAgg().cardinality(),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    CARDINALITY(ARRAY_AGG(au.email)),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `cardinality(KColumn kColumnArray)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `CARDINALITY` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    cardinality(arrayAgg(APP_USER.EMAIL)),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    CARDINALITY(ARRAY_AGG(au.email)),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None