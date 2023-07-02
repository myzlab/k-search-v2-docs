---
title: Array Append
sidebar_label: Array Append
---

## Definition

The `arrayAppend` method allows you to add the `ARRAY_APPEND` function to the query. The `ARRAY_APPEND` function is used to append elements at the end of the array.

## Available methods

- `arrayAppend(KColumn kColumnArray, KColumn kColumnElement)`: Receives two [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_APPEND` function.
- `arrayAppend(KColumn kColumnArray, Object element)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an `Object` value which will be supplied to the `ARRAY_APPEND` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KColumn)

Java code:

```java
k
.select(
    arrayAppend(arrayAgg(APP_USER.EMAIL), APP_USER.FIRST_NAME),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()), APP_USER.FIRST_NAME)
.multiple();
```

SQL generated:

```sql
SELECT 
    ARRAY_APPEND(ARRAY_AGG(au.email), au.first_name),
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
    arrayAppend(arrayAgg(APP_USER.EMAIL), "EOF"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_APPEND(ARRAY_AGG(au.email), ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** "EOF"