---
title: PostgreSQL DELETE statement
sidebar_label: Introduction
---

## Introduction

In this section you will learn how to implement the PostgreSQL DELETE statement and PostgreSQL DELETE USING(JOIN) statement through **_KSearch_** library.

The Postgresql DELETE statement allows you to delete one or more rows from a table.

Syntax:

```sql showLineNumbers
DELETE
FROM table_name
USING another_table_name
WHERE conditions
```

To generate this type of statement through  library you will need:

- Specify the name of the table from which you want to delete rows. This is done through the table() method.
- Specify one or more tables in the [`USING`](/docs/delete-statement/clauses/using) clause through the using() method.
- Use the columns of the tables that appear in the USING clause in the WHERE clause for joining data.
- Add the necessary conditions in the [`WHERE`](/docs/delete-statement/clauses/where/introduction) clause.
- Build and execute the statement through the delete() method.

This type of statement has the insurance against null conditions implemented. What is this?