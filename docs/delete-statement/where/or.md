---
title: Or
sidebar_label: Or
---

## Definition

The `or` methods allows you to add the `OR` operator to a `WHERE` clause.

## Available methods

### 1. `or(`[`KCondition`](/docs/misc/kcondition/introduction) `kCondition)`

- **kCondition:** which contains all the information about the condition that will be added to the `WHERE` clause with an `OR` operator.

### 2. `or(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

- **kRaw:** is a raw content which will be added in the `WHERE` clause with an `OR` operator.

## Method hierarchy

The `or` method can be used right after the following methods:

- [`where`](/docs/delete-statement/where/), [`and`](/docs/delete-statement/where/and), [`andNot`](/docs/delete-statement/where/and-not), [`or`](/docs/delete-statement/where/or), [`orNot`](/docs/delete-statement/where/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/delete-statement/where/and), [`andNot`](/docs/delete-statement/where/and-not), [`or`](/docs/delete-statement/where/or), [`orNot`](/docs/delete-statement/where/or-not), [`returning`](/docs/delete-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(APP_USER.ID.gt(559))
.or(APP_USER.ACTIVE.isFalse())
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > ?
OR au.active IS FALSE
```

Parameters:

- **?1:** 559

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(raw("au.id > 559"))
.or(raw("au.active IS FALSE"))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id > 559
OR au.active IS FALSE
```

Parameters:

- None