---
title: Array Fill
sidebar_label: Array Fill
---

## Definition

The `arrayFill` method allows you to add the `ARRAY_FILL` function to the query. The `ARRAY_FILL` function is used to return an array initialized with supplied value and dimensions, optionally with lower bounds other than 1.

## Available methods

- `arrayFill(KColumn kColumn, int upper)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and the upper bound which will be supplied to the `ARRAY_FILL` function.
- `arrayFill(KColumn kColumn, int upper, Integer lower)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), the upper bound and the lower bound which will be supplied to the `ARRAY_FILL` function.
- `arrayFill(Object element, int upper)`: Receives an `Object` value and the upper bound which will be supplied to the `ARRAY_FILL` function.
- `arrayFill(Object element, int upper, Integer lower)`: Receives an `Object` value, the upper bound and the lower bound which will be supplied to the `ARRAY_FILL` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, int)

Java code:

```java
k
.select(
    arrayFill(APP_USER.EMAIL, 4)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT ARRAY_FILL(au.email, ARRAY[4])
FROM app_user au
```

Parameters:

- None

## Example: (KColumn, int, Integer)

Java code:

```java
k
.select(
    arrayFill(APP_USER.EMAIL, 4, 3)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT ARRAY_FILL(au.email, ARRAY[4], ARRAY[3])
FROM app_user au
```

Parameters:

- None

## Example: (Object, int, Integer)

Java code:

```java
k
.select(
    arrayFill(12, 4, 3)
)
.multiple();
```

SQL generated:

```sql
SELECT ARRAY_FILL(?1, ARRAY[4], ARRAY[3])
```

Parameters:

- **?1:** 12

## Example: (Object, int, Integer)

Java code:

```java
k
.select(
    arrayFill(12, 4)
)
.multiple();
```

SQL generated:

```sql
SELECT ARRAY_FILL(?1, ARRAY[4])
```

Parameters:

- **?1:** 12