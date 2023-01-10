---
title: What is KSearch?
sidebar_label: What is KSearch?
---

import K from '@site/src/components/K';

<K/> is a library that will help you build different types of SQL statements and manipulate the extracted data in a simple and intuitive way.
<br/>

It is developed exclusively for [Spring Boot](https://spring.io/projects/spring-boot) and currently support only PostgreSQL database.

The supported SQL statements are:

## SELECT statement

<K/> supports all clause associated to SELECT statement.<br/>
With <K/> you can:<br/><br/>

- Query one and only one record from the database
- Query multiple database records.
- Automatically map the returned columns into an object with defined attributes.

## INSERT statement

<K/> supports all clause associated to INSERT statement.<br/>
With <K/> you can:<br/><br/>

- Insert a single record, as well as insert multiple records at the same time.
- Automatically map the columns returned into an object with defined attributes.
- Create statements of the type `INSERT INTO` and `INSERT INTO SELECT`.
- Know the number of records inserted.
- Control what to do in case of conflicts (Upsert available)

## UPDATE statement

<K/> supports all clause associated to UPDATE statement.<br/>
With <K/> you can:<br/><br/>

- Update records on a table.
- Automatically map the columns returned into an object with defined attributes.
- Execute an `UPDATE` statement that simulates working through a `JOIN` of the main table with another table using the `FROM` clause.
- Know the number of records updated.
- Add optional conditions (If value is null, condition is omitted automatically).

## DELETE statement

<K/> supports all clause associated to DELETE statement.<br/>
With <K/> you can:<br/><br/>

- Delete records on a table.
- Automatically map the columns returned into an object with defined attributes.
- Execute a `DELETE` statement that simulates working through a `JOIN` of the main table with another table using the `USING` clause.
- Know the number of records deleted.
- Add optional conditions (If value is null, condition is omitted automatically).
