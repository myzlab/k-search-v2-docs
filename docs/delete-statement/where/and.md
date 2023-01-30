---
title: And
sidebar_label: And
---

## Definition

The `and` methods allows you to add the `AND` operator to a `WHERE` clause.

The methods available to use this functionality are:

- `and(KCondition kCondition)`: Receives a [`KCondition`](/docs/misc/kcondition/introduction) which will be added to `WHERE` clause with an `AND` operator.
- `and(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `WHERE` clause with an `AND` operator.

## Method hierarchy

The `and` method can be used right after the following methods:

- [`where`](/docs/delete-statement/where/)
- [`and`](/docs/delete-statement/where/and)
- [`andNot`](/docs/delete-statement/where/and-not)
- [`or`](/docs/delete-statement/where/or)
- [`orNot`](/docs/delete-statement/where/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/delete-statement/where/and)
- [`andNot`](/docs/delete-statement/where/and-not)
- [`or`](/docs/delete-statement/where/or)
- [`orNot`](/docs/delete-statement/where/or-not)
- [`returning`](/docs/delete-statement/returning)
- [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(APP_USER.ID.gt(559))
.and(APP_USER.ACTIVE.isFalse())
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > ?
AND au.active IS FALSE
```

Parameters:

- **?1:** 559

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(raw("au.id > 559"))
.and(raw("au.active IS FALSE"))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > 559
AND au.active IS FALSE
```

Parameters:

- None