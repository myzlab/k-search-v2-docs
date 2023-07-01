---
title: Select Distinct On
sidebar_label: Select Distinct On
---

## Definition

The `selectDistinctOn` methods allows you to add the `SELECT DISTINCT ON` clause to the query.

## Available methods

### 1. `selectDistinctOn(KColumn kColumn)`

- **kColumn:** is the expression which will be added to the `DISTINCT ON` clause.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn).

### 2. `selectDistinctOn(KRaw kRaw)`

- **kRaw:** is a raw content which will be added in the `DISTINCT ON` clause.

### 3. `selectDistinctOn(int n)`

- **n:** is a integer value which will be added in the `DISTINCT ON` clause and will indicate the number of the column added in the `SELECT` list that you want to use in the `DISTINCT ON` clause. The first column corresponds to the number 1, the second column corresponds to the number 2, and so on.

## Method hierarchy

The `selectDistinctOn` method can be used right after the following methods or objects:

- [`KBuilder`](/docs/get-started/installation/springboot-jdbc#ready-to-use), [`with`](/docs/select-statement/with), [`withRecursive`](/docs/select-statement/with)

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