---
title: First Value
sidebar_label: First Value
---

## Definition

The `firstValue` method allows you to add the `FIRST_VALUE` function to the query. The `FIRST_VALUE` function returns a value evaluated against the first row in a sorted partition of a result set.

The only one method available to use this functionality is:

- `firstValue(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `FIRST_VALUE` function.
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
    firstValue(APP_USER.FIRST_NAME).over(
        wd().partitionBy(APP_USER.ROLE_ID)
    )
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    FIRST_VALUE(au.first_name) OVER(
        PARTITION BY au.role_id
    )
FROM app_user au
```

Parameters:

- None