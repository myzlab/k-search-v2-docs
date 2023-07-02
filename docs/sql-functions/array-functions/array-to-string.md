---
title: Array To String
sidebar_label: Array To String
---

## Definition

The `arrayToString` method allows you to add the `ARRAY_TO_STRING` function to the query. The `ARRAY_TO_STRING` function is used to concatenates array elements using supplied delimiter and optional null string.

## Available methods

- `arrayToString(KColumn kColumnArray, String delimiter)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a `String` value which will be supplied to the `ARRAY_TO_STRING` function.
- `arrayToString(KColumn kColumnArray, String delimiter, String nullString)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and two `String` values which will be supplied to the `ARRAY_TO_STRING` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, String)

Java code:

```java
k
.select(
    arrayToString(arrayAgg(APP_USER.FIRST_NAME), ","),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_TO_STRING(ARRAY_AGG(au.first_name), ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** ","

## Example: (KColumn, String, String)

Java code:

```java
k
.select(
    arrayToString(arrayAgg(APP_USER.FIRST_NAME), ",", "*"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_TO_STRING(ARRAY_AGG(au.first_name), ?1, ?2),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** ","
- **?1:** "*"