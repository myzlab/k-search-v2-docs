---
title: Fetch
sidebar_label: Fetch
---

## Definition

The `fetch` method allows you to add the `FETCH` clause to the query.

The methods available to use this functionality are:

- `fetch(int count)`: Receives an int value which will be added to `FETCH` clause.
- `fetch(long count)`: Receives a long value which will be added to `FETCH` clause.
- `fetch(KOptionalLong kOptionalLong)`: Receives a [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions) which will be added to `FETCH` clause.

## Method hierarchy

The `fetch` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/select/distinct)
- [`select1`](/docs/select-statement/select/select1)
- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)
- [`where`](/docs/select-statement/where/)
- [`and`](/docs/select-statement/where/and)
- [`andNot`](/docs/select-statement/where/and-not)
- [`or`](/docs/select-statement/where/or)
- [`orNot`](/docs/select-statement/where/or-not)
- [`groupBy`](/docs/select-statement/group-by/)
- [`having`](/docs/select-statement/having/)
- [`and`](/docs/select-statement/having/and)
- [`andNot`](/docs/select-statement/having/and-not)
- [`or`](/docs/select-statement/having/or)
- [`orNot`](/docs/select-statement/having/or-not)
- [`window`](/docs/select-statement/window/)
- [`except`](/docs/select-statement/combining/except)
- [`exceptAll`](/docs/select-statement/combining/except-all)
- [`intersect`](/docs/select-statement/combining/intersect)
- [`intersectAll`](/docs/select-statement/combining/intersect-all)
- [`union`](/docs/select-statement/combining/union)
- [`unionAll`](/docs/select-statement/combining/union-all)
- [`orderBy`](/docs/select-statement/order-by/)
- [`offset`](/docs/select-statement/offset)

and the subsequent methods that can be called are:

- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `int`

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME
)
.from(APP_USER)
.fetch(10)
.multiple();
```

SQL generated:

```sql
SELECT au.first_name
FROM app_user au
FETCH FIRST 10 ROWS ONLY
```

Parameters:

- None

## Example: `KOptionalLong` (null value)

Java code:

```java
final Long nullLong = null;

k
.select(
    APP_USER.FIRST_NAME
)
.from(APP_USER)
.fetch(optional(nullLong))
.multiple();
```

SQL generated:

```sql
SELECT au.first_name
FROM app_user au
```

Parameters:

- None

## Example: `KOptionalLong` (not null value)

Java code:

```java
final Long nullLong = 10;

k
.select(
    APP_USER.FIRST_NAME
)
.from(APP_USER)
.fetch(optional(nullLong))
.multiple();
```

SQL generated:

```sql
SELECT au.first_name
FROM app_user au
FETCH FIRST 10 ROWS ONLY
```

Parameters:

- None