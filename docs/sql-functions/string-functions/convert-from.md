---
title: Convert From
sidebar_label: Convert From
---

## Definition

The `convertFrom` method allows you to add the `CONVERT_FROM` function to the query. The `CONVERT_FROM` function convert a string to the current database encoding.

The only one method available to use this functionality is:

- `convertFrom(KColumn kColumn, KEncoding srcEncoding)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a [`KEncoding`](/docs/misc/kencoding) which will be supplied to the `CONVERT_FROM` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    convertFrom(APP_USER.FIRST_NAME.cast(bytea()), utf8())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CONVERT_FROM(CAST(au.first_name AS BYTEA), 'UTF8')
FROM app_user au
```

Parameters:

- None