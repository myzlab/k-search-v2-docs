---
title: And Not
sidebar_label: And Not
---

## Definition

The `andNot` methods allows you to add the `AND NOT` operator to a `WHERE` clause.

The methods available to use this functionality are:

- `andNot(KCondition kCondition)`: Receives a [`KCondition`](/docs/kcondition/introduction) which will be added to `WHERE` clause with an `AND NOT` operator.
- `andNot(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `WHERE` clause with an `AND NOT` operator.

## Method hierarchy

The `andNot` method can be used right after the following methods:

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
- [`returning`](/docs/select-statement/select/)
- [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(APP_USER.ID.gt(559))
.andNot(APP_USER.ACTIVE.isTrue())
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > ?
AND NOT (au.active IS TRUE)
```

Parameters:

- **?1:** 559

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(raw("au.id > 559"))
.andNot(raw("au.active IS TRUE"))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > 559
AND NOT (au.active IS TRUE)
```

Parameters:

- None