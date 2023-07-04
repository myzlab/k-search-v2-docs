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

- [`where`](/docs/update-statement/where/), [`and`](/docs/update-statement/where/and), [`andNot`](/docs/update-statement/where/and-not), [`or`](/docs/update-statement/where/or), [`orNot`](/docs/update-statement/where/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/update-statement/where/and), [`andNot`](/docs/update-statement/where/and-not), [`or`](/docs/update-statement/where/or), [`orNot`](/docs/update-statement/where/or-not), [`returning`](/docs/update-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, "Jhon")
.where(APP_USER.ID.gt(559))
.or(APP_USER.ACTIVE.isFalse())
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id > ?2
OR au.active IS FALSE
```

Parameters:

- **?1:** "Jhon"
- **?2:** 559

## Example: `KRaw`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, "Jhon")
.where(raw("au.id > 559"))
.or(raw("au.active IS FALSE"))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id > 559
OR au.active IS FALSE
```

Parameters:

- **?1:** "Jhon"