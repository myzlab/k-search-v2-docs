---
title: Grouping Sets
sidebar_label: Grouping Sets
---

## Definition

The `groupingSets` method together with the `groupingSet` method allows you to add a `GROUPING SETS` subclause to the query. The `GROUPING SETS` subclause allows you to define multiple grouping sets in the same query.

- `groupingSet(KColumn... kColumns)`: Receives a variable quantity of [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) and [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be considered like a single grouping set that can be used in the `GROUPING SETS` subclause.
- `groupingSets(KColumn... kColumns)`: Receives a variable quantity of [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) and [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `GROUPING SETS` subclause.

The use of these methods is recommended in statements that involve the [`GROUP BY`](/docs/select-statement/group-by/introduction) clause.

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