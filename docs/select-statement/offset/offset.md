---
title: Offset
sidebar_label: Offset
---

## Definition

The `offset` method allows you to add the `OFFSET` clause to the query.

The methods available to use this functionality are:

- `offset(int count)`: Receives an int value which will be added to `OFFSET` clause.
- `offset(long count)`: Receives a long value which will be added to `OFFSET` clause.
- `offset(KOptionalLong kOptionalLong)`: Receives a [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions) which will be added to `OFFSET` clause.

## Method hierarchy

The `offset` method can be used right after the following methods:

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
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)
- [`orderBy`](/docs/select-statement/order-by/)
- [`limit`](/docs/select-statement/select/)

and the subsequent methods that can be called are:

- [`fetch`](/docs/select-statement/select/)
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
.offset(10)
.multiple();
```

SQL generated:

```sql
SELECT au.first_name
FROM app_user au
OFFSET 10
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
.offset(optional(nullLong))
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
.offset(optional(nullLong))
.multiple();
```

SQL generated:

```sql
SELECT au.first_name
FROM app_user au
OFFSET 10
```

Parameters:

- None