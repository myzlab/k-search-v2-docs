---
title: Exists By Id
sidebar_label: Exists By Id
---

## Definition

The `existsById` method allows you to get a boolean value indicating whether a record in a table exists, filtered by its primary key.

## Available methods

- `existsById(Y id)`: Receives a primary key value.
- `existsById(String jdbc, Y id)`: Receives the name of datasource connection to which you need to connect and a primary key value.

## Example: Y

Java code:

```java
final boolean exists = languageRepository.existsById(11L);
```

SQL generated:

```sql
SELECT EXISTS (
    SELECT ?1
    FROM language la
    WHERE la.id = ?2
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** 11

## Example: String, Y

Java code:

```java
final boolean exists = languageRepository.existsById(
    K.JDBC_LEGACY,
    11L
);
```

SQL generated:

```sql
SELECT EXISTS (
    SELECT ?1
    FROM language la
    WHERE la.id = ?2
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** 11