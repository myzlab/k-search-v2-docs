---
title: Select 1
sidebar_label: Select 1
---

## Definition

The `select1` method allows you to add a `SELECT` statement with the number 1 as value to the query.

The only one method available to use this functionality is:

- `select1()`: It does not receive any parameters.

The use of this method is recommended in declarations that involve the `EXISTS` operator.

## Method hierarchy

The `select1` method can be used right after the following methods or objects:

- k
- [`with`](/docs/select-statement/clauses/with)
- [`withRecursive`](/docs/select-statement/clauses/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/clauses/select/)
- [`from`](/docs/select-statement/clauses/select/)
- [`where`](/docs/select-statement/clauses/select/)
- [`groupBy`](/docs/select-statement/clauses/select/)
- [`window`](/docs/select-statement/clauses/select/)
- [`except`](/docs/select-statement/clauses/select/)
- [`exceptAll`](/docs/select-statement/clauses/select/)
- [`intersect`](/docs/select-statement/clauses/select/)
- [`intersectAll`](/docs/select-statement/clauses/select/)
- [`union`](/docs/select-statement/clauses/select/)
- [`unionAll`](/docs/select-statement/clauses/select/)
- [`orderBy`](/docs/select-statement/clauses/select/)
- [`limit`](/docs/select-statement/clauses/select/)
- [`offset`](/docs/select-statement/clauses/select/)
- [`fetch`](/docs/select-statement/clauses/select/)
- [`single`](/docs/select-statement/clauses/select/)
- [`multiple`](/docs/select-statement/clauses/select/)

## Example

Java code:

```java
k
.select1()
.from(APP_USER)
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT ?1
FROM app_user au
```

Parameters:

- **?1:** 1