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

- [`deleteFrom`](/docs/delete-statement/delete-from/), [`using`](/docs/delete-statement/using/)

and the subsequent methods that can be called are:

- [`and`](/docs/delete-statement/where/and), [`andNot`](/docs/delete-statement/where/and-not), [`or`](/docs/delete-statement/where/or), [`orNot`](/docs/delete-statement/where/or-not), [`returning`](/docs/delete-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(APP_USER.ID.eq(11))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id = ?1
```

Parameters:

- **?1:** 11

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(APP_USER)
.where(raw("au.id = 11"))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au
WHERE au.id = 11
```

Parameters:

- None