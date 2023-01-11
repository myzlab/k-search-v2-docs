---
title: Grouping
sidebar_label: Grouping
---

## Definition

The `grouping` method allows you to add a `GROUPING` function to the query. The `GROUPING` function returns 0 if the argument is a member of the current grouping set and 1 otherwise.

The only one method available to use this functionality is:

- `grouping(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) value which will be supplied to the `GROUPING` function.

The use of this method is recommended in statements that involve the [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/), [`CUBE`](/docs/select-statement/group-by/grouping-sets/cube), or [`ROLLUP`](/docs/select-statement/group-by/grouping-sets/rollup) subclauses.

To use this method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    count(),
    grouping(APP_USER.ROLE_ID)
)
.from(APP_USER)
.groupBy(APP_USER.ROLE_ID)
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*),
    GROUPING(au.role_id)
FROM app_user au
GROUP BY au.role_id
```

Parameters:

- None