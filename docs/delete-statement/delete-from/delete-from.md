---
title: Delete From
sidebar_label: Delete From
---

## Definition

The `deleteFrom` methods allows you to add the `DELETE FROM` clause to the query.

## Available methods

### 1. `deleteFrom(`[`KTable`](/docs/misc/ktable) `kTable)`

- **kTable:** is the table which will be added to `FROM` clause.

### 2. `deleteFrom(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

- **kRaw:** is a raw content which will be added in the `DELETE FROM` clause.

## Method hierarchy

The `deleteFrom` method can be used right after the following methods or objects:

- k, [`with`](/docs/delete-statement/with), [`withRecursive`](/docs/delete-statement/with)

and the subsequent methods that can be called are:
- [`using`](/docs/delete-statement/using/), [`where`](/docs/delete-statement/where/), [`returning`](/docs/delete-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KTable`

Java code:

```java
k
.deleteFrom(APP_USER)
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au;
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.deleteFrom(raw("app_user au"))
.execute();
```

SQL generated:

```sql
DELETE
FROM app_user au;
```

Parameters:

- None