---
title: In methods
sidebar_label: In
---

## Definition

The In methods allow you to add the IN condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + In(String c, Object[] v[, boolean skipWhenEmpty])
- orWhere | where + [ Not ] + In(String c, Collection v[, boolean skipWhenEmpty])

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to enter in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.
- **skipWhenEmpty**: By sending this parameter with value true, it allows to omit the condition if the array or Collection supplied by parameter is empty. By default this value is false.

## Examples

**Example 1**: Find the id and last name of all users whose role id is not 3, 4 or 5.

Java code:

```java showLineNumbers
final Long[] ids = new Long[] {
    3L, 4L, 5L
};

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereNotIn("au.role_id", ids).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.role_id NOT IN ( ?1, ?2, ?3 )
```

Parameters:

- ?1 → 3
- ?1 → 4
- ?1 → 5