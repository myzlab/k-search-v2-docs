---
title: Grouping Sets
sidebar_label: Grouping Sets
---

## Definition

The `groupingSets` method together with the `groupingSet` method allows you to add the [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/) subclause to the query. The [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/) subclause allows you to define multiple grouping sets in the same query.

The methods available to use this functionality are:

- `groupingSet(KColumn... kColumns)`: Receives a variable quantity of [`KColumn`](/docs/misc/select-list-values#2-kcolumn) and [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be considered like a single grouping set that can be used in the [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/) subclause.
- `groupingSets(KColumn... kColumns)`: Receives a variable quantity of [`KColumn`](/docs/misc/select-list-values#2-kcolumn) and [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/) subclause.

The use of these methods is recommended in statements that involve the `GROUP BY` clause.

To use these methods, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    count(),
    APP_USER.CREATED_AT.cast(date()),
    APP_USER.ROLE_ID,
    grouping(APP_USER.CREATED_AT.cast(date())),
    grouping(APP_USER.ROLE_ID)
)
.from(APP_USER)
.groupBy(
    groupingSets(
        groupingSet(APP_USER.CREATED_AT.cast(date()), APP_USER.ROLE_ID),
        APP_USER.ROLE_ID
    )
)
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*),
    CAST(au.created_at AS DATE),
    au.role_id,
    GROUPING(CAST(au.created_at AS DATE)),
    GROUPING(au.role_id)
FROM app_user au
GROUP BY 
    GROUPING SETS(
        (CAST(au.created_at AS DATE), au.role_id),
        au.role_id
    )
```

Parameters:

- None