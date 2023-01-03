---
title: Or
sidebar_label: Or
---

## Definition

The `or` methods allows you to add an `OR` operator to a `WHERE` clause.

The methods available to use this functionality are:

- `or(KCondition kCondition)`: Receives a `KCondition` which will be added to `WHERE` clause with an `OR` operator. (To learn more about the conditions, please go to the [`KCondition`](/docs/conditions/eq) section).
- `or(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `WHERE` clause with an `OR` operator.

## Method hierarchy

The `or` method can be used right after the following methods:

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
.select(APP_USER.ID, APP_USER.FIRST_NAME)
.from(APP_USER)
.where(APP_USER.CREATED_AT.lt(LocalDateTime.now().minusMonths(1)))
.or(APP_USER.EMAIL.ilk("jHonDoE"))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.created_at < ?1
OR LOWER(au.email) LIKE ?2
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
.or(raw("au.email IS NOT NULL"))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.role_id IS NOT NULL
OR au.email IS NOT NULL
```

Parameters:

- None