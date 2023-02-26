---
title: Concat
sidebar_label: Concat
---

## Definition

The `concat` method allows you to add the `CONCAT` function to the query. The `CONCAT` function concatenates all arguments as a string and returns the result.

The only one method available to use this functionality is:

- `concat(KBaseColumnCastable... kBaseColumnCastables)`: Receives a variable quantity of [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`Values`](/docs/misc/select-list-values#3-values) which will be supplied to the `CONCAT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CONCAT(au.first_name, ?1, au.last_name)
FROM app_user au
```

Parameters:

- **?1:** " "