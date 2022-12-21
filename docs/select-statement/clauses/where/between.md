---
title: Between methods
sidebar_label: Between
---

## Definition

The Between methods allow you to add the BETWEEN condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + Between(String c, String low, String high)

where:

- **c**: Name of the column against which you want to add the condition.
- **low**: Value to be entered as the lower limit in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.
- **high**: Value to be entered as the upper limit in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

## Examples

**Example 1**: Find the id and last name of all users whose role id is between the numbers 3 and 8 (Both inclusive).

Java code:

```java showLineNumbers
final Long bottomStop = 3L;
final Long topStop = 8L;

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereBetween("au.role_id", bottomStop, topStop).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.role_id BETWEEN ?1 AND ?2
```

- ?1 → 3
- ?1 → 8