---
title: DISTINCT and DISTINCT ON clause
sidebar_label: Distinct [On]
---

In this section you will learn how to implement the `DISTINCT` and `DISTINCT ON` clause through the **_KSearch_** library.

## DISTINCT clause

The `DISTINCT` clause is used in the `SELECT` statement to remove duplicate rows from a result set.

Syntax:

```sql showLineNumbers
SELECT DISTINCT ...
FROM ... 
```

To generate this type of statement through **_KSearch_** library you will need:

- Specify the name of the table from which you want to query data. This is done through the [`table()`](/docs/select-statement/clauses/from) method.
- Specify the use of the `DISTINCT` clause through the `distinct()` method.
- Specify any other clauses available for the [`SELECT`](/docs/select-statement/introduction) statement.

### Examples

**Example 1**: Find the names of the countries used in a store (Do not show repeated country names).

Java code:

```java showLineNumbers
K.
table("store s").
innerJoin("country co", "co.id", "s.country_id").
select(
    "co.name"
).
distinct().
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT DISTINCT co.name
FROM store s
INNER JOIN country co ON co.id = s.country_id
```

Parameters: None

## DISTINCT ON clause

The `DISTINCT ON` clause is applied in the `SELECT` statement on a set of columns, the set of results is grouped based on the defined columns and of each group is kept the first record found.

Syntax:

```sql showLineNumbers
SELECT DISTINCT ON (column1) column1, column2...
FROM ... 
```

To generate this type of statement through **_KSearch_** library you will need:

- Specify the name of the table from which you want to query data. This is done through the [`table()`](/docs/select-statement/clauses/from) method.
- Specify the use of the `DISTINCT ON` clause on the desired columns through the `distinctOn()` method.
- Specify any other clauses available for the [`SELECT`](/docs/select-statement/introduction) statement.

### Examples

**Example 1**: Bearing in mind that a news item can have multiple associated images, look for the title and url of an associated image of all the news in the database.

Java code:

```java showLineNumbers
K.
table("news n").
innerJoin("news_file nf", "n.id", "nf.news_id").
select(
    "n.title",
    "nf.url"
).
distinctOn("n.id").
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT DISTINCT ON (n.id) n.title, nf.url
FROM news n
INNER JOIN news_file nf ON n.id = nf.news_id
```

Parameters: None