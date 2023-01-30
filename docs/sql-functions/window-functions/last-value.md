---
title: Last Value
sidebar_label: Last Value
---

## Definition

The `lastValue` method allows you to add the `LAST_VALUE` function to the query. The `LAST_VALUE` function returns the last value in an ordered partition of a result set.

The only one method available to use this functionality is:

- `lastValue(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `LAST_VALUE` function.
.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lastValue(APP_USER.FIRST_NAME).over(
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
    LAST_VALUE(au.first_name) OVER(
        PARTITION BY au.role_id
        ORDER BY au.first_name
    )
FROM app_user au
```

Parameters:

- None