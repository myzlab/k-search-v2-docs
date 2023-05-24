---
title: Assert Exists By Id
sidebar_label: Assert Exists By Id
---

## Definition

The `assertExistsById` method allows you to confirm that a record exists in a table, filtered by its primary key. If it does not exist, this method throws a KException.

The methods available to use this functionality are:

- `assertExistsById(Y id, HttpStatus httpStatus, String message)`: Receives a primary key value and the HttpStatus and message to throw.
- `assertExistsById(String jdbc, Y id, HttpStatus httpStatus, String message)`: Receives the name of datasource connection to which you need to connect, a primary key value and the HttpStatus and message to throw.

## Example: Y, HttpStatus, String

Java code:

```java
languageRepository.assertExistsById(
    151L,
    HttpStatus.NOT_FOUND,
    "Language not found!"
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
- **?2:** 151

## Example: String, Y, HttpStatus, String

Java code:

```java
languageRepository.assertExistsById(
    K.JDBC_LEGACY,
    151L,
    HttpStatus.NOT_FOUND,
    "Language not found!"
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
- **?2:** 151