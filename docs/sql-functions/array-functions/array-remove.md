---
title: Array Remove
sidebar_label: Array Remove
---

## Definition

The `arrayRemove` method allows you to add the `ARRAY_REMOVE` function to the query. The `ARRAY_REMOVE` function is used to remove all elements equal to the given value from the array (array must be one-dimensional).

## Available methods

- `arrayRemove(KColumn kColumnArray, KColumn kColumnElement)`: Receives two [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_REMOVE` function.
- `arrayRemove(KColumn kColumnArray, Object element)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an `Object` value which will be supplied to the `ARRAY_REMOVE` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KColumn)

Java code:

```java
k
.select(
    arrayRemove(arrayAgg(APP_USER.EMAIL), APP_USER.FIRST_NAME),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()), APP_USER.FIRST_NAME)
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_REMOVE(ARRAY_AGG(au.email), au.first_name),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE), au.first_name
```

Parameters:

- None

## Example: (KColumn, Object)

Java code:

```java
k
.select(
    arrayRemove(arrayAgg(APP_USER.EMAIL), "EOF"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_REMOVE(ARRAY_AGG(au.email), ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** "EOF"