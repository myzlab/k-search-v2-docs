---
title: Array Length
sidebar_label: Array Length
---

## Definition

The `arrayLength` method allows you to add the `ARRAY_LENGTH` function to the query. The `ARRAY_LENGTH` function is used to return the length of the requested array dimension.

The only one method available to use this functionality is:

- `arrayLength(KColumn kColumnArray, int n)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a int value which will be supplied to the `ARRAY_LENGTH` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    arrayLength(arrayAgg(APP_USER.EMAIL), 1),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_LENGTH(ARRAY_AGG(au.email), 1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None
