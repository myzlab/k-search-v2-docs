---
title: What is KSearch?
sidebar_label: What is KSearch?
---

import K from '@site/src/components/K';

<K></K> is a library that will help you build different types of SQL statements and manipulate the extracted data in a simple and intuitive way.<br/>
The supported SQL statements are:

## SELECT statement

With <K></K> you can:

- Query one and only one record from the database, internally calling the getSingleResult() method of the JPA EntityManager.
- Query multiple database records, calling the getResultList() method of the JPA EntityManager.
- Add the following clauses to the SQL statement: `WITH`, `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`, `LIMIT`, `OFFSET`

## INSERT statement

With <K></K> you can:

- Inserting a single record, as well as, inserting multiple records at the same time (Multiple Insert).
- Add an attribute to return after the execution of the Insert statement.
- Create statements of the type `INSERT INTO` and `INSERT INTO SELECT`.

## UPDATE statement

With <K></K> you can:

- Update records on a table with at least one condition (`UPDATE` with `WHERE` clause).
- Execute a `UPDATE` statement that simulates working through a `JOIN` of the main table with another table (`UPDATE` with `FROM` and `WHERE` clause).

## DELETE statement

With <K></K> you can:

- Delete records on a table with at least one condition (`DELETE` with `WHERE` clause).
- Execute a `DELETE` statement that simulates working through a `JOIN` of the main table with another table (`DELETE` with `USING` and `WHERE` clause).