---
title: Less Than [Or Equal To] methods
sidebar_label: Less Than [Or Equal To]
---

## Definition

The Greater Than [Or Equal To] methods allow you to add the < or <= condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

## LessThan methods

The LessThan methods allow you to add the < condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + LessThan(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to be entered as the lower limit in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose number of consecutive failed login attempts is less than 3.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereLessThan("au.failed_attempts", 3).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.failed_attempts < ?1
```

Parameters:

- ?1 → 3

## LessThanOrEqualTo methods

The LessThanOrEqualTo methods allow you to add the <= condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

orWhere | where + [ Not ] + [ I ] + LessThanOrEqualTo(String c, Object v)
where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to be entered as the lower limit in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose number of consecutive failed login attempts is less than or equal to 2.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereLessThanOrEqualTo("au.failed_attempts", 2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.failed_attempts <= ?1
```

Parameters:

- ?1 → 2