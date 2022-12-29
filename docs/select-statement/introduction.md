---
title: PostgreSQL SELECT statement
sidebar_label: Introduction
---

import K from '@site/src/components/K';

One of the most common operations, when you work with a database, is to fetch data from tables by using the `SELECT` statement.

Syntax of a `SELECT` statement:

```sql showLineNumbers
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    [ * | expression [ [ AS ] output_name ] [, ...] ]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition ]
    [ WINDOW window_name AS ( window_definition ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
```

To fully study the SQL Select clause, visit its documentation [https://www.postgresql.org/docs/current/sql-select.html](https://www.postgresql.org/docs/current/sql-select.html)

## Basic Concepts

Some basic concepts will be listed that will allow you to know certain things that are and are not possible through the <K/>.

### 1. Query all the columns of a table through the `SELECT *`

It is not possible to use the `SELECT *` to query all the columns of a table. This is initially due to two reasons:

- This forces you to query on database only for the columns that you will use according to your information need. It is very important to fetch exactly what is necessary and nothing else.
- Indicating each column will allow you to have control when manipulating the data that is queried.

### 2. Single vs Multiple

There are only 2 ways in which information can be queried from the database and their difference is in the number of rows that are requested:

- [`single()`](/docs/data-manipulation/single): Request one and only one single record from database.
- [`multiple()`](/docs/data-manipulation/multiple): Request multiple records from database.

### 3. 100% native (SQL)

The builded statements are 100% native (SQL), so everything that works in PostgreSQL will work here.

## How to correctly manipulate the queried data?

To know how to correctly manipulate the data queried in the database, we must know in which objects will be stored in our Java application. To do this, we will talk about the `KRow` and `KCollection` objects.

The `KRow` object allows you to store the data queried from a database record. In this sense, since it represents a single record in the database, we will see it as the return data type in the [`single()`](/docs/data-manipulation/single) method.

When we talk about the [`multiple()`](/docs/data-manipulation/multiple) method, the return data type will be a `KCollection`, which simply contains a list of `KRow` internally, representing all the records queried in the database.

With this information, we are then interested in knowing how to extract the data from a KRow object.

The name with which we can access the value of the record in the `KRow` is defined by the name of the column or the expression in the SQL query, but if this column has assigned an alias, then the name with which we can access the value is the alias (The column name or the expression is overridden by the alias).

This way of accessing the values applies similarly to the construction of `ResponseEntity` objects.

Additionally, if we are working with [`Mappers`](/docs/data-manipulation/mapper) (it is nothing more than a class that inherits from a `KRow`), <K/> is able of automatically storing the unaltered columns directly in the requested [`Mapper`](/docs/data-manipulation/mapper), making it easy to access the queried values.

To learn more about how the queried data is manipulated, please visit the [Manipulation Data](/docs/data-manipulation/introduction) section.