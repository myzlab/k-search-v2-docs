---
title: Delete From
sidebar_label: Delete From
---

## Definition

The `deleteFrom` methods allows you to add the `DELETE FROM` clause to the query.

The methods available to use this functionality are:

- `deleteFrom(KTable kTable)`: Receives a [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) which will be supplied to the `DELETE FROM` clause.
- `deleteFrom(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `DELETE FROM` clause.

## Method hierarchy

The `deleteFrom` method can be used right after the following methods or objects:

- k
- [`with`](/docs/delete-statement/with)
- [`withRecursive`](/docs/delete-statement/with)

and the subsequent methods that can be called are:

- [`using`](/docs/delete-statement/using/)
- [`where`](/docs/delete-statement/where/)
- [`returning`](/docs/delete-statement/returning)
- [`execute`](/docs/select-statement/select/)

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