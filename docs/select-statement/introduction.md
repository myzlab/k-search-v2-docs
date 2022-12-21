---
title: PostgreSQL SELECT statement
sidebar_label: Introduction
---

## Introduction

In this section you will learn how to implement a `SELECT` statement through **_KSearch_** library.

The SELECT statement allows you query data from a table.

Syntax:

```sql showLineNumbers
WITH ...
SELECT ...
FROM ... 
JOIN ...
WHERE conditions
GROUP BY ...
HAVING conditions
ORDER BY ...
LIMIT ...
OFFSET ...
```

To generate this type of statement through **_KSearch_** library you will need:

- Specify the name of the table from which you want to query data. This is done through the [`table()`](/docs/select-statement/clauses/from) method.
- Add the necessary joins in the [`JOIN`](/docs/select-statement/clauses/join) clause.
- Specify the name of the columns you want to query. This is done through the [`select()`](/docs/select-statement/clauses/select/) method.
- Add the necessary conditions in the [`WHERE`](/docs/select-statement/clauses/where/introduction) clause.
- Specify the name of the columns by which you want to group. This is done through the [`groupBy()`](/docs/select-statement/clauses/group-by) method.
- Add the necessary conditions in the [`HAVING`](/docs/select-statement/clauses/where/introduction) clause.
- Specify the name of the columns by which you want to order. To learn more about how to implement this clause, go to the [`ORDER BY`](/docs/select-statement/clauses/join) section.
- Make use of the [`page()`](/docs/select-statement/clauses/from) method, which together with the [`limit()`](/docs/select-statement/clauses/from) method, allows the pagination of the query through the automatic calculation of the query offset. In this sense, if the [`page()`](/docs/select-statement/clauses/from) method is invoked but the [`limit()`](/docs/select-statement/clauses/from) method is not invoked on the same query, then the [`page()`](/docs/select-statement/clauses/from) method has no effect on the query that will be generated.
- Add a limit to the query. This is done through the [`limit()`](/docs/select-statement/clauses/from) method. If the [`page()`](/docs/select-statement/clauses/from) method was previously invoked then the automatic offset calculation is performed.
- Add an offset to the query. This is done through the [`offset()`](/docs/select-statement/clauses/from) method.
- Build and execute the statement through one of the following methods: [`single()`](/docs/select-statement/clauses/from) or [`multiple()`](/docs/select-statement/clauses/from).

## Basic Concepts

Some basic concepts will be listed that will allow you to know certain things that are and are not possible through the **_KSearch_** library.

### 1. Query all the columns of a table through the SELECT *

It is not possible to use the SELECT * to query all the columns of a table. This is initially due to two reasons:

- This forces you to query on database only for the columns that you will use according to your information need. It is very important to consult exactly what is necessary and nothing else.
- Indicating each column will allow you to have control when manipulating the data that is queried.

### 2. Single vs Multiple

There are only 2 ways in which information can be queried from the database and their difference is in the number of rows that are requested:

- [**Single**](/docs/select-statement/clauses/from): Request a single row.
- [**Multiple**](/docs/select-statement/clauses/from): Request multiple rows.

### 3. 100% native (SQL)

The builded statements are 100% native (SQL), so everything that works in PostgreSQL will work here.

## How is the column name and / or alias determined?

In many of the methods, reference is made to the use of the name of the attribute contained in the KRow, and it is explained that this name is defined by the name of the column in the SQL query, but if this column has assigned an alias, so the name of the attribute is the alias (The column name is overridden by the alias).

We will explain in detail how **_KSearch_** performs the separation between what will be the column name and the alias name when adding the information to be extracted in the SELECT clause.

### General rules

- We will call **Fragment** to each of the expressions or columns that we want to extract through the SELECT clause.
- The separation between the column name and the alias name in the **Fragment** is done explicitly through the `AS` reserved word. The `AS` keyword must have blanks on both sides and is not case sensitive.
- If the `AS` keyword appears in the **Fragment**, then the alias is given by everything on the right side of the `AS` keyword and likewise, it becomes the name of the attribute when the information is already stored in the KRow.
- If the `AS` keyword does NOT appear in the **Fragment**, then an alias is not defined. Later:
- If the **Fragment** does not contain any point ".", then the entire **Fragment** becomes the name of the attribute when the information is already found stored in the KRow.
- If the **Fragment** contains any point ".", then everything on the right side of the last point "." of the **Fragment** becomes the name of the attribute when the information is already stored in the KRow.
- If the reserved word `AS` is inside some parentheses, then it is not considered for the generation of the alias.
- The **Fragment** cannot start with "(" and end with ")" at the same time.
- The **Fragment** cannot start with the `AS` keyword.
- The **Fragment** cannot end with the `AS` keyword.

**Note:** It is recommended that every time a complex expression is used, use an alias to be able to refer easily to the values stored in KRow objects.

### Examples

For each **Fragment**, what will be considered as the name of the attribute will be presented in bold and the examples agree with our recommendations on how to write these **Fragments**:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "created_at AS createdAt",
    "au.phone_number AS phoneNumber",
    "CAST(au.json_data AS TEXT) AS jsonData",
    "password"
).
multiple();
```

- au.**id**
- created_at AS **createdAt**
- au.phone_number AS **phoneNumber**
- CAST(au.json_data AS TEXT) AS **jsonData**
- **password**