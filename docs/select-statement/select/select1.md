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
- [`with`](/docs/select-statement/with)
- [`withRecursive`](/docs/select-statement/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`where`](/docs/select-statement/select/)
- [`groupBy`](/docs/select-statement/select/)
- [`window`](/docs/select-statement/select/)
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)
- [`orderBy`](/docs/select-statement/select/)
- [`limit`](/docs/select-statement/select/)
- [`offset`](/docs/select-statement/select/)
- [`fetch`](/docs/select-statement/select/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

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