---
title: Greater Than [Or Equal To] methods
sidebar_label: Greater Than [Or Equal To]
---

## Definition

The Greater Than [Or Equal To] methods allow you to add the > or >= condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

## GreaterThan methods

The GreaterThan methods allow you to add the > condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + GreaterThan(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to be entered as the lower limit in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose number of consecutive failed login attempts is greater than 2.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereGreaterThan("au.failed_attempts", 2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.failed_attempts > ?1
```

Parameters:

- ?1 → 2

## GreaterThanOrEqualTo methods

The GreaterThanOrEqualTo methods allow you to add the >= condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + GreaterThanOrEqualTo(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to be entered as the lower limit in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose number of consecutive failed login attempts is greater than or equal to 2.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereGreaterThanOrEqualTo("au.failed_attempts", 2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.failed_attempts >= ?1
```

Parameters:

- ?1 → 2