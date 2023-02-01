---
title: Array Replace
sidebar_label: Array Replace
---

## Definition

The `arrayReplace` method allows you to add the `ARRAY_REPLACE` function to the query. The `ARRAY_REPLACE` function is used to replace each array element equal to the given value with a new value.

The methods available to use this functionality are:

- `arrayReplace(KColumn kColumnArray, KColumn kColumnPreviousValue, Object newValue)`: Receives two [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an `Object` value which will be supplied to the `ARRAY_REPLACE` function.
- `arrayReplace(KColumn kColumnArray, Object previousValue, Object newValue)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and two `Object` values which will be supplied to the `ARRAY_REPLACE` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KColumn, Object)

Java code:

```java
k
.select(
    arrayReplace(arrayAgg(APP_USER.FIRST_NAME), APP_USER.LAST_NAME, "EOF"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()),APP_USER.LAST_NAME)
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_REPLACE(ARRAY_AGG(au.first_name), au.last_name, ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE), au.last_name
```

Parameters:

- **?1:** "EOF"

## Example: (KColumn, Object, Object)

Java code:

```java
k
.select(
    arrayReplace(arrayAgg(APP_USER.FIRST_NAME), "com", "EOF"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()),APP_USER.LAST_NAME )
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_REPLACE(ARRAY_AGG(au.first_name), ?1, ?2),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE), au.last_name
```

Parameters:

- **?1:** "com"
- **?1:** "EOF"