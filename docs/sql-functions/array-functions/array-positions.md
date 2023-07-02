---
title: Array Positions
sidebar_label: Array Positions
---

## Definition

The `arrayPositions` method allows you to add the `ARRAY_POSITIONS` function to the query. The `ARRAY_POSITIONS` function is used to returns an array of subscripts of all occurrences of the second argument in the array given as first argument (array must be one-dimensional).

## Available methods

- `arrayPositions(KColumn kColumnArray, KColumn kColumnElement)`: Receives two [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_POSITIONS` function.
- `arrayPositions(KColumn kColumnArray, Object element)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an `Object` value which will be supplied to the `ARRAY_POSITIONS` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KColumn)

Java code:

```java
k
.select(
    arrayPositions(arrayAgg(APP_USER.FIRST_NAME), APP_USER.LAST_NAME),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()), APP_USER.LAST_NAME)
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_POSITIONS(ARRAY_AGG(au.first_name), au.last_name),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE), au.last_name
```

Parameters:

- None

## Example: (KColumn, Object)

Java code:

```java
k
.select(
    arrayPositions(arrayAgg(APP_USER.EMAIL), "EOF"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_POSITIONS(ARRAY_AGG(au.email), ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** "EOF"
