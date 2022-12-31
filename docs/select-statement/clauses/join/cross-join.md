---
title: Cross Join
sidebar_label: Cross Join
---

## Definition

The `crossJoin` method allows you to add a `CROSS JOIN` clause to the query.

The methods available to use this functionality are:

- `crossJoin(KTable kTable)`: Receives a [`KTable`](/docs/select-statement/clauses/from/introduction) which will be added to `CROSS JOIN` clause.
- `crossJoin(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/clauses/select/introduction#7-kraw) which will be added to `CROSS JOIN` clause.

## Method hierarchy

The `crossJoin` method can be used right after the following methods or objects:

- [`from`](/docs/select-statement/clauses/from/)
- [`innerJoin`](/docs/select-statement/clauses/join/inner-join)
- [`leftJoin`](/docs/select-statement/clauses/join/left-join)
- [`rightJoin`](/docs/select-statement/clauses/join/right-join)
- [`fullJoin`](/docs/select-statement/clauses/join/full-join)
- [`crossJoin`](/docs/select-statement/clauses/join/cross-join)

and the subsequent methods that can be called are:

- [`from`](/docs/select-statement/clauses/from/)
- [`innerJoin`](/docs/select-statement/clauses/join/inner-join)
- [`leftJoin`](/docs/select-statement/clauses/join/left-join)
- [`rightJoin`](/docs/select-statement/clauses/join/right-join)
- [`fullJoin`](/docs/select-statement/clauses/join/full-join)
- [`crossJoin`](/docs/select-statement/clauses/join/cross-join)
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

## Example: `KTable`

Java code:

```java
k
.select(APP_USER.EMAIL, ROLE.NAME)
.from(APP_USER)
.crossJoin(ROLE)
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.email, ro.name
FROM app_user au
CROSS JOIN role ro
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.select(APP_USER.EMAIL, raw("ro.name"))
.from(APP_USER)
.crossJoin(raw("role ro"))
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.email, ro.name
FROM app_user au
CROSS JOIN role ro
```

Parameters:

- None