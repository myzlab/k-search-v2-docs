---
title: Raw methods
sidebar_label: Raw
---

## Definition

The Raw methods allow you to directly add raw text without parameterization to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + Raw(String c)

where:

- **c**: Raw text that you want to add the condition.

### Examples

**Example 1**: Find the id and last name of all users whose number of consecutive failed login attempts multiplied by two is less than or equal to 7.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereRaw("au.failed_attempts * 2 <= 7").
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.failed_attempts * 2 <= 7
```

Parameters: None