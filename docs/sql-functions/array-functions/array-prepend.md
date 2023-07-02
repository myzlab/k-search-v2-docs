---
title: Array Prepend
sidebar_label: Array Prepend
---

## Definition

The `arrayPrepend` method allows you to add the `ARRAY_PREPEND` function to the query. The `ARRAY_PREPEND` function is used to append an element to the beginning of an array.

## Available methods

- `arrayPrepend(KColumn kColumnElement, KColumn kColumnArray)`: Receives two [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_PREPEND` function.
- `arrayPrepend(Object element, KColumn kColumnArray)`: Receives an `Object` and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_PREPEND` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KColumn)

Java code:

```java
k
.select(
    arrayPrepend(APP_USER.FIRST_NAME, arrayAgg(APP_USER.EMAIL)),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()), APP_USER.FIRST_NAME)
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_PREPEND(au.first_name, ARRAY_AGG(au.email)),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE), au.first_name
```

Parameters:

- None

## Example: (Object, KColumn)

Java code:

```java
k
.select(
    arrayPrepend("EOF", arrayAgg(APP_USER.EMAIL)),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_PREPEND(?1, ARRAY_AGG(au.email)),
    CAST(au.created_at AS DATE)
FROM app_user au GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** "EOF"