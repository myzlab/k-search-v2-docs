---
title: And Not
sidebar_label: And Not
---

## Definition

The `andNot` methods allows you to add the `AND NOT` operator to a `WHERE` clause.

## Available methods

### 1. `andNot(`[`KCondition`](/docs/misc/kcondition/introduction) `kCondition)`

- **kCondition:** which contains all the information about the condition that will be added to the `WHERE` clause with an `AND NOT` operator.

### 2. `andNot(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

- **kRaw:** is a raw content which will be added in the `WHERE` clause with an `AND NOT` operator.

## Method hierarchy

The `andNot` method can be used right after the following methods:

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
.andNot(APP_USER.ACTIVE.isTrue())
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id > ?2
AND NOT (au.active IS TRUE)
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
.andNot(raw("au.active IS TRUE"))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id > 559
AND NOT (au.active IS TRUE)
```

Parameters:

- **?1:** "Jhon"