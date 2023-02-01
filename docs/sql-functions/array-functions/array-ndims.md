---
title: Array Ndims
sidebar_label: Array Ndims
---

## Definition

The `arrayNdims` method allows you to add the `ARRAY_NDIMS` function to the query. The `ARRAY_NDIMS` function is used to return the number of dimensions of the array.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `arrayNdims()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `ARRAY_NDIMS` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.arrayAgg().arrayNdims(),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_NDIMS(ARRAY_AGG(au.email)),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `arrayNdims(KColumn kColumnArray)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_NDIMS` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    arrayNdims(arrayAgg(APP_USER.EMAIL)),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_NDIMS(ARRAY_AGG(au.email)),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None