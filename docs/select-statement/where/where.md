---
title: Where
sidebar_label: Where
---

## Definition

The `where` methods allows you to add a `WHERE` clause to the query.

The methods available to use this functionality are:

- `where(KCondition kCondition)`: Receives a [`KCondition`](/docs/kcondition/introduction) which will be added to `WHERE` clause.
- `where(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `WHERE` clause.

## Method hierarchy

The `where` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/select/distinct)
- [`select1`](/docs/select-statement/select/select1)
- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)

and the subsequent methods that can be called are:

- [`and`](/docs/select-statement/where/and)
- [`andNot`](/docs/select-statement/where/and-not)
- [`or`](/docs/select-statement/where/or)
- [`orNot`](/docs/select-statement/where/or-not)
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

## Example: `KCondition`

Java code:

```java
k
.selectDistinct(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.isNull())
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT au.id
FROM app_user au
WHERE au.email IS NULL
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(raw("au.created_at > CURRENT_DATE - 1"))
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT au.id
FROM app_user au 
WHERE au.created_at > CURRENT_DATE - 1
```

Parameters:

- None