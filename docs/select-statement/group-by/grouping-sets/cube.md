---
title: Cube
sidebar_label: Cube
---

## Definition

The `cube` method allows you to add the `CUBE` subclause to the query. The `CUBE` subclause is a short way to define multiple grouping sets so the following are equivalent:

```sql
CUBE(k1, k2, k3) 

GROUPING SETS (
    (k1, k2, k3), 
    (k1, k2),
    (k1, k3),
    (k2, k3),
    (k1),
    (k2),
    (k3), 
    ()
 ) 
```

The only one method available to use this functionality is:

- `cube(KColumn... kColumns)`: Receives a variable quantity of [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) and [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `CUBE` subclause.

The use of this method is recommended in statements that involve the [`GROUP BY`](/docs/select-statement/group-by/introduction) clause.

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
    APP_USER.CREATED_AT.cast(date()),
    APP_USER.ROLE_ID,
    grouping(APP_USER.CREATED_AT.cast(date())),
    grouping(APP_USER.ROLE_ID)
)
.from(APP_USER)
.groupBy(
    cube(APP_USER.CREATED_AT.cast(date()), APP_USER.ROLE_ID)
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
    CUBE(CAST(au.created_at AS DATE), au.role_id)
```

Parameters:

- None