---
title: Select 1
sidebar_label: Select 1
---

## Definition

The `select1` method allows you to add the `SELECT` clause with the number 1 as value to the query.

The only one method available to use this functionality is:

- `select1()`: It does not receive any parameters.

The use of this method is recommended in statements that involve the `EXISTS` operator.

## Method hierarchy

The `select1` method can be used right after the following methods or objects:

- k
- [`with`](/docs/select-statement/with)
- [`withRecursive`](/docs/select-statement/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`where`](/docs/select-statement/where/)
- [`groupBy`](/docs/select-statement/group-by/)
- [`window`](/docs/select-statement/window/)
- [`except`](/docs/select-statement/combining/except)
- [`exceptAll`](/docs/select-statement/combining/except-all)
- [`intersect`](/docs/select-statement/combining/intersect)
- [`intersectAll`](/docs/select-statement/combining/intersect-all)
- [`union`](/docs/select-statement/combining/union)
- [`unionAll`](/docs/select-statement/combining/union-all)
- [`orderBy`](/docs/select-statement/order-by/)
- [`limit`](/docs/select-statement/limit)
- [`offset`](/docs/select-statement/offset)
- [`fetch`](/docs/select-statement/fetch/)
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

```sql
SELECT ?1
FROM app_user au
```

Parameters:

- **?1:** 1