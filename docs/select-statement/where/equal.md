---
title: Equal methods
sidebar_label: Equal
---

## Definition

The Equal methods allow you to add the = condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + Equal(String c, Object v)
- orWhere | where(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to enter in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

## Examples

**Example 1**: Find the id and last name of all users whose name is not "John" (Ignoring case sensitivity).

Java code:

```java showLineNumbers
final String name = "John";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereNotIEqual("au.name", name).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE NOT UPPER(au.name) = ?1
```

Parameters:

- ?1 → "JOHN"

**Example 2**: Find the id and last name of all users whose name is "John" or "Sara".

Java code:

```java showLineNumbers
final String name1 = "John";
final String name2 = "Sara";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereEqual("au.name", name1).
orWhereEqual("au.name", name2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.name = ?1 OR au.name = ?2
```

Parameters:

- ?1 → "John"
- ?1 → "Sara"