---
title: And Not
sidebar_label: And Not
---

## Definition

The `andNot` methods allows you to add the `AND NOT` operator to a `WHERE` clause.

The methods available to use this functionality are:

- `andNot(KCondition kCondition)`: Receives a [`KCondition`](/docs/misc/kcondition/introduction) which will be added to `WHERE` clause with an `AND NOT` operator.
- `andNot(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `WHERE` clause with an `AND NOT` operator.

## Method hierarchy

The `andNot` method can be used right after the following methods:

- [`where`](/docs/select-statement/where/)
- [`and`](/docs/select-statement/where/and)
- [`andNot`](/docs/select-statement/where/and-not)
- [`or`](/docs/select-statement/where/or)
- [`orNot`](/docs/select-statement/where/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/select-statement/where/and)
- [`andNot`](/docs/select-statement/where/and-not)
- [`or`](/docs/select-statement/where/or)
- [`orNot`](/docs/select-statement/where/or-not)
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

## Example: `KCondition`

Java code:

```java
k
.select(APP_USER.ID, APP_USER.FIRST_NAME)
.from(APP_USER)
.where(APP_USER.CREATED_AT.lt(LocalDateTime.now().minusMonths(1)))
.andNot(APP_USER.EMAIL.ilk("jHonDoE"))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.created_at < ?1
AND NOT (LOWER(au.email) LIKE ?2)
```

Parameters:

- **?1:** 2022-11-30T13:18:26.390024
- **?2:** "jhondoe"

## Example: `KRaw`

Java code:

```java
k
.select(APP_USER.ID, APP_USER.FIRST_NAME)
.from(APP_USER)
.where(raw("au.role_id IS NOT NULL"))
.andNot(raw("au.email IS NOT NULL"))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.role_id IS NOT NULL
AND NOT (au.email IS NOT NULL)
```

Parameters:

- None