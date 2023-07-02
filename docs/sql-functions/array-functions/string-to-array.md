---
title: String To Array
sidebar_label: String To Array
---

## Definition

The `stringToArray` method allows you to add the `STRING_TO_ARRAY` function to the query. The `STRING_TO_ARRAY` function is used to splits string into array elements using supplied delimiter and optional null string.

## Available methods

- `stringToArray(KBaseColumnCastable kBaseColumnCastable, String delimiter)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) or a [`Values`](/docs/misc/select-list-values#3-values) and a `String` value which will be supplied to the `STRING_TO_ARRAY` function.
- `stringToArray(KBaseColumnCastable kBaseColumnCastable, String delimiter, String nullString)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) or a [`Values`](/docs/misc/select-list-values#3-values) and two `String` values which will be supplied to the `STRING_TO_ARRAY` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, String)

Java code:

```java
k
.select(
    stringToArray(APP_USER.EMAIL, "@"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    STRING_TO_ARRAY(au.email, ?1),
    CAST(au.created_at AS DATE)
FROM app_user au
```

Parameters:

- **?1:** "@"

## Example: (KColumn, String, String)

Java code:

```java
k
.select(
    stringToArray(APP_USER.EMAIL, "@", "yopmail.com"),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.multiple();

```

SQL generated:

```sql
SELECT
    STRING_TO_ARRAY(au.email, ?1, ?2),
    CAST(au.created_at AS DATE)
FROM app_user au
```

Parameters:

- **?1:** "@"
- **?1:** "yopmail.com"