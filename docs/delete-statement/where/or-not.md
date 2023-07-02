---
title: Or Not
sidebar_label: Or Not
---

## Definition

The `orNot` methods allows you to add the `OR NOT` operator to a `WHERE` clause.

## Available methods

- `orNot(KCondition kCondition)`: Receives a [`KCondition`](/docs/misc/kcondition/introduction) which will be added to `WHERE` clause with an `OR NOT` operator.
- `orNot(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `WHERE` clause with an `OR NOT` operator.

## Method hierarchy

The `orNot` method can be used right after the following methods:

- [`where`](/docs/delete-statement/where/), [`and`](/docs/delete-statement/where/and), [`andNot`](/docs/delete-statement/where/and-not), [`or`](/docs/delete-statement/where/or), [`orNot`](/docs/delete-statement/where/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/delete-statement/where/and), [`andNot`](/docs/delete-statement/where/and-not), [`or`](/docs/delete-statement/where/or), [`orNot`](/docs/delete-statement/where/or-not), [`returning`](/docs/delete-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(APP_USER.ID.gt(559))
.orNot(APP_USER.ACTIVE.isTrue())
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > ?
OR NOT (au.active IS TRUE)
```

Parameters:

- **?1:** 559

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(raw("au.id > 559"))
.orNot(raw("au.active IS TRUE"))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > 559
OR NOT (au.active IS TRUE)
```

Parameters:

- None