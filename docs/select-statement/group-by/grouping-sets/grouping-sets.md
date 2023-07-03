---
title: Grouping Sets
sidebar_label: Grouping Sets
---

## Definition

The `groupingSets` method together with the `groupingSet` method allows you to add the `GROUPING SETS` subclause to the query.

The `GROUPING SETS` subclause allows you to define multiple grouping sets in the same query.

## Available methods

### 1. `groupingSet(KColumn... kColumns)`

- **kColumns:** are all the expresions that will be considered like a single grouping set that can be used in the `GROUPING SETS` subclause.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn).

### 2. `groupingSets(KColumn... kColumns)`

- **kColumns:** are all the expresions that will be added to the `GROUPING SETS` subclause.
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`groupingSet`](/docs/select-statement/group-by/grouping-sets/#1-groupingsetkcolumn-kcolumns).

:::tip

The use of this method is recommended in statements that involve the `GROUP BY` clause.

:::

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