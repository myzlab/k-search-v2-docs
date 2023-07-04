---
title: Where
sidebar_label: Where
---

## Definition

The `where` methods allows you to add the `WHERE` clause to the query.

## Available methods

### 1. `where(`[`KCondition`](/docs/misc/kcondition/introduction) `kCondition)`

- **kCondition:** which contains all the information about the condition that will be added to the `WHERE` clause.

### 2. `where(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

- **kRaw:** is a raw content which will be added in the `WHERE` clause.

## Method hierarchy

The `where` method can be used right after the following methods:

- [`set`](/docs/update-statement/set/), [`from`](/docs/update-statement/from/)

and the subsequent methods that can be called are:

- [`and`](/docs/update-statement/where/and), [`andNot`](/docs/update-statement/where/and-not), [`or`](/docs/update-statement/where/or), [`orNot`](/docs/update-statement/where/or-not), [`returning`](/docs/update-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, "Jhon")
.where(APP_USER.ID.eq(11L))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id = ?2
```

Parameters:

- **?1:** "Jhon"
- **?2:** 11

## Example: `KRaw`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, "Jhon")
.where(raw("au.id = 11"))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id = 11
```

Parameters:

- **?1:** "Jhon"