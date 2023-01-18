---
title: Json Object Agg
sidebar_label: Json Object Agg
---

## Definition

The `jsonObjectAgg` method allows you to add the `JSON_OBJECT_AGG` function to the query. The `JSON_OBJECT_AGG` is a function that accepts a set of name/value pairs values and returns a JSON object consisting of a set of key-value pairs.

The only one method available to use this functionality is:

- `jsonObjectAgg(KColumn kColumnName, KColumn kColumnValue)`: Receives two [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `JSON_OBJECT_AGG` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    jsonObjectAgg(APP_USER.ID, APP_USER.EMAIL),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    JSON_OBJECT_AGG(au.id, au.email),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None