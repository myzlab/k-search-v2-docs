---
title: Date Extraction methods
sidebar_label: Date Extraction
---

## Definition

The Date Extraction methods allow you to add the EXTRACT method to the SQL statement. The available methods to add this condition to the WHERE clause are:

## Year methods

The Year methods allow you to extract the year from a column of type date or timestamp through the EXTRACT method and add it to the SQL statement through the = condition. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + Year(String c, int v)

where:

- **c**: Name of the column from which the year will be extracted and then added to the condition.
- **v**: Value to enter in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users that were created in the year 2019.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereYear("au.created_at", 2019).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE EXTRACT( YEAR FROM au.created_at ) = ?1
```

Parameters:

- ?1 → 2019

## Month methods

The Month methods allow you to extract the month from a column of type date or timestamp through the EXTRACT method and add it to the SQL statement through the = condition. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + Month(String c, int v)

where:

- **c**: Name of the column from which the month will be extracted and then added to the condition.
- **v**: Value to enter in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users that were created in the month of January of any year.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereMonth("au.created_at", 1).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE EXTRACT( MONTH FROM au.created_at ) = ?1
```

Parameters:

- ?1 → 1

## Day methods

The Day methods allow you to extract the day of the month from a column of type date or timestamp through the EXTRACT method and add it to the SQL statement through the = condition. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + Day(String c, int v)

where:

- **c**: Name of the column from which the day of the month will be extracted and then added to the condition.
- **v**: Value to enter in the condition. When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users that were created on the first day of any month of any year.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereDay("au.created_at", 1).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE EXTRACT( DAY FROM au.created_at ) = ?1
```

Parameters:

- ?1 → 1