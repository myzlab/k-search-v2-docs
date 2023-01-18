---
title: And
sidebar_label: And
---

## Definition

The `and` methods allows you to add the `AND` operator to a `WHERE` clause.

The methods available to use this functionality are:

- `and(KCondition kCondition)`: Receives a [`KCondition`](/docs/kcondition/introduction) which will be added to `WHERE` clause with an `AND` operator.
- `and(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `WHERE` clause with an `AND` operator.

## Method hierarchy

The `and` method can be used right after the following methods:

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
- [`window`](/docs/select-statement/select/)
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)
- [`orderBy`](/docs/select-statement/order-by/)
- [`limit`](/docs/select-statement/select/)
- [`offset`](/docs/select-statement/select/)
- [`fetch`](/docs/select-statement/select/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.select(APP_USER.ID, APP_USER.FIRST_NAME)
.from(APP_USER)
.where(APP_USER.CREATED_AT.lt(LocalDateTime.now().minusMonths(1)))
.and(APP_USER.EMAIL.ilk("jHonDoE"))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.created_at < ?1
AND LOWER(au.email) LIKE ?2
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
.and(raw("au.email IS NOT NULL"))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.role_id IS NOT NULL
AND au.email IS NOT NULL
```

Parameters:

- None