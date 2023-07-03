---
title: Array Lower
sidebar_label: Array Lower
---

## Definition

The `arrayLower` method allows you to add the `ARRAY_LOWER` function to the query. The `ARRAY_LOWER` function is used returns lower bound of the requested array dimension.

## Available methods

- `arrayLower(KColumn kColumnArray, int n)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a int value which will be supplied to the `ARRAY_LOWER` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    arrayLower(arrayAgg(APP_USER.EMAIL), 1),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_LOWER(ARRAY_AGG(au.email), 1),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None
