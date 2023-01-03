---
title: Cross Join
sidebar_label: Cross Join
---

## Definition

The `crossJoin` method allows you to add a `CROSS JOIN` clause to the query.

The methods available to use this functionality are:

- `crossJoin(KTable kTable)`: Receives a [`KTable`](/docs/select-statement/from/introduction) which will be added to `CROSS JOIN` clause.
- `crossJoin(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `CROSS JOIN` clause.

## Method hierarchy

The `crossJoin` method can be used right after the following methods or objects:

- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)

and the subsequent methods that can be called are:

- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)
- [`where`](/docs/select-statement/where/)
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

```sql
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

```sql
SELECT au.email, ro.name
FROM app_user au
CROSS JOIN role ro
```

Parameters:

- None