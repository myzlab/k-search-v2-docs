---
title: Array Cat
sidebar_label: Array Cat
---

## Definition

The `arrayCat` method allows you to add the `ARRAY_CAT` function to the query. The `ARRAY_CAT` function is used to concatenate two arrays.

The only one method available to use this functionality is:

- `arrayCat(KColumn kColumnArray1, KColumn kColumnArray2)`: Receives two [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ARRAY_CAT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    arrayCat(arrayAgg(APP_USER.EMAIL), arrayAgg(APP_USER.FIRST_NAME)),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_CAT(ARRAY_AGG(au.email), ARRAY_AGG(au.first_name)),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None
