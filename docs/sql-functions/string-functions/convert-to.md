---
title: Convert To
sidebar_label: Convert To
---

## Definition

The `convertTo` method allows you to add the `CONVERT_TO` function to the query. The `CONVERT_TO` function convert a string to the encoding specified.

The only one method available to use this functionality is:

- `convertTo(KColumn kColumn, KEncoding destEncoding)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a [`KEncoding`](/docs/misc/kencoding) which will be supplied to the `CONVERT_TO` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    convertTo(APP_USER.FIRST_NAME, utf8())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CONVERT_TO(au.first_name, 'UTF8')
FROM app_user au
```

Parameters:

- None