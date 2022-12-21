---
title: Null methods
sidebar_label: "Null"
---

## Definition

The Null methods allow you to add the IS NULL condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + Null(String c)

where:

- **c**: Name of the column against which you want to add the condition.

## Examples

**Example 1**: Find the id and last name of all users who do not have an assigned role.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereNull("au.role_id").
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.role_id IS NULL
```

Parameters: None