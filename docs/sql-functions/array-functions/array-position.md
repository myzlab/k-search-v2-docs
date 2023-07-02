---
title: Array Position
sidebar_label: Array Position
---

## Definition

The `arrayPosition` method allows you to add the `ARRAY_POSITION` function to the query. The `ARRAY_POSITION` function is used to returns the subscript of the first occurrence of the second argument in the array, starting at the element indicated by the third argument or at the first element (array must be one-dimensional).

## Available methods

- `arrayPosition(KColumn kColumnArray, Object element)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an `Object` value which will be supplied to the `ARRAY_POSITION` function.
- `arrayPosition(KColumn kColumnArray, Object element, Integer n)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), an `Object` value and a `Integer` value which will be supplied to the `ARRAY_POSITION` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, Object)

Java code:

```java
k
.select(
    arrayPosition(arrayAgg(APP_USER.EMAIL), "contacto@myzlab.com"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_POSITION(ARRAY_AGG(au.email), ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** "contacto@myzlab.com"

## Example: (KColumn, Object, Integer)

Java code:

```java
k
.select(
    arrayPosition(arrayAgg(APP_USER.EMAIL), "contacto@myzlab.com", 1),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_POSITION(ARRAY_AGG(au.email), ?1, 1),
    CAST(au.created_at AS DATE)
FROM app_user au GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** "contacto@myzlab.com"
