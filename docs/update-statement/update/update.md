---
title: Update
sidebar_label: Update
---

## Definition

The `update` methods allows you to add the `UPDATE` clause to the query.

The methods available to use this functionality are:

- `update(KTable kTable)`: Receives a [`KTable`](/docs/misc/ktable) which will be supplied to the `UPDATE` clause. This clause just accepts the type of [`KTable`](/docs/misc/ktable) __Generated__.
- `update(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `UPDATE` clause.

## Method hierarchy

The `update` method can be used right after the following methods or objects:

- k, [`with`](/docs/update-statement/with), [`withRecursive`](/docs/update-statement/with)

and the subsequent methods that can be called are:

- [`set`](/docs/update-statement/set/), [`from`](/docs/update-statement/from/), [`where`](/docs/update-statement/where/), [`returning`](/docs/update-statement/returning), [`execute`](/docs/select-statement/select/)

## Example: `KTable`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = au.last_name
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.update(raw("app_user au"))
.set(APP_USER.FIRST_NAME, raw("au.last_name"))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = au.last_name
```

Parameters:

- None