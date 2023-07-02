---
title: And Not
sidebar_label: And Not
---

## Definition

The `andNot` methods allows you to add the `AND NOT` operator to a `WHERE` clause.

## Available methods

- `andNot(KCondition kCondition)`: Receives a [`KCondition`](/docs/misc/kcondition/introduction) which will be added to `WHERE` clause with an `AND NOT` operator.
- `andNot(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `WHERE` clause with an `AND NOT` operator.

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