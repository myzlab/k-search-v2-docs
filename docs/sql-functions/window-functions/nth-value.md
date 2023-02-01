---
title: Nth Value
sidebar_label: Nth Value
---

## Definition

The `nthValue` method allows you to add the `NTH_VALUE` function to the query. The `NTH_VALUE` function returns a value from the nth row in an ordered partition of a result set.

The only one method available to use this functionality is:

- `nthValue(KColumn kColumn, int offset)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an offset which will be supplied to the `NTH_VALUE` function.
.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    nthValue(APP_USER.FIRST_NAME, 3).over(
        wd()
        .partitionBy(APP_USER.ROLE_ID)
        .orderBy(APP_USER.FIRST_NAME)
    )
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    NTH_VALUE(au.first_name, 3) OVER(
        PARTITION BY au.role_id
        ORDER BY au.first_name
    )
FROM app_user au
```

Parameters:

- None