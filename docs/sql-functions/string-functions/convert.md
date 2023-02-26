---
title: Convert
sidebar_label: Convert
---

## Definition

The `convert` method allows you to add the `CONVERT` function to the query. The `CONVERT` function convert a string to the encoding specified.

The only one method available to use this functionality is:

- `convert(KColumn kColumn, KEncoding srcEncoding, KEncoding destEncoding)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and two [`KEncoding`](/docs/misc/kencoding) which will be supplied to the `CONVERT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    convert(APP_USER.FIRST_NAME.cast(bytea()), utf8(), latin1())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CONVERT(CAST(au.first_name AS BYTEA), 'UTF8', 'LATIN1')
FROM app_user au
```

Parameters:

- None