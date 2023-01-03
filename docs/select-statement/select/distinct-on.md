---
title: Select Distinct On
sidebar_label: Select Distinct On
---

## Definition

The `selectDistinctOn` methods allows you to add a `SELECT` statement with the `DISTINCT ON` clause to the query.

The methods available to use this functionality are:

- `selectDistinctOn(KColumn kColumn)`: Receives either a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) object or a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) object which will be added in the `DISTINCT ON` clause.
- `selectDistinctOn(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added in the `DISTINCT ON` clause.
- `selectDistinctOn(int n)`: Receives a integer value which will be added in the `DISTINCT ON` clause. This integer value will indicate the number of the column added in the [`SELECT`](/docs/select-statement/select/introduction) list that you want to use in the `DISTINCT ON` clause. The first column corresponds to the number 1, the second column corresponds to the number 2, and so on.

## Method hierarchy

The `selectDistinctOn` method can be used right after the following methods or objects:

- k
- [`with`](/docs/select-statement/with)
- [`withRecursive`](/docs/select-statement/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/select/)

## Example: KTableColumn

Java code:

```java
k
.selectDistinctOn(APP_USER.ID)
.select(
    APP_USER.ID,
    APP_USER.FIRST_NAME
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT ON (au.id)
    au.id,
    au.first_name
FROM app_user au
```

Parameters:

- None

## Example: KColumn

Java code:

```java
k
.selectDistinctOn(concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME))
.select(APP_USER.FIRST_NAME)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT ON (CONCAT(au.first_name || ?1 || au.last_name))
    au.first_name
FROM app_user au
```

Parameters:

- **?1:** " "

## Example: KRaw

Java code:

```java
k
.selectDistinctOn(raw("TO_CHAR(au.created_at, 'YYYY')"))
.select(
    APP_USER.ID,
    APP_USER.CREATED_AT.as("createdAt")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT ON (TO_CHAR(au.created_at, 'YYYY'))
    au.id,
    au.created_at AS "createdAt"
FROM app_user au
```

Parameters:

- None

## Example: int

Java code:

```java
k
.selectDistinctOn(1)
.select(APP_USER.ROLE_ID)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT ON (1) au.role_id
FROM app_user au
```

Parameters:

- None