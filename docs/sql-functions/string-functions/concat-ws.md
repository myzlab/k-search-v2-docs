---
title: Concat Ws
sidebar_label: Concat Ws
---

## Definition

The `concatWs` method allows you to add the `CONCAT_WS` function to the query. The `CONCAT_WS` function concatWsenates the arguments as a string using a delimiter and return the result.

The only one method available to use this functionality is:

- `concatWs(String separator, KBaseColumnCastable... kBaseColumnCastables)`: Receives a String and a variable quantity of [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`Values`](/docs/misc/select-list-values#3-values) which will be supplied to the `CONCAT_WS` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    concatWs(",", APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CONCAT_WS(?1, au.first_name, ?2, au.last_name)
FROM app_user au
```

Parameters:

- **?1:** ","
- **?2:** " "