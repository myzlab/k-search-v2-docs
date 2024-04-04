---
title: Assert Not Exists By Id
sidebar_label: Assert Not Exists By Id
---

## Definition

The `assertNotExistsById` method allows you to confirm that a record not exists in a table, filtered by its primary key. If it does exist, this method throws a KException.

## Available methods

- `assertNotExistsById(Y id, HttpStatus httpStatus, String message)`: Receives a primary key value and the HttpStatus and message to throw.
- `assertNotExistsById(Y id, KAssertExistsFunction<KWhere, KQuery> kAssertExistsFunction, HttpStatus httpStatus, String message)`: Receives a primary key value, a `KAssertExistsFunction` that allows adding new conditions to the base query and the HttpStatus and message to throw.
- `assertNotExistsById(String jdbc, Y id, KAssertExistsFunction<KWhere, KQuery> kAssertExistsFunction, HttpStatus httpStatus, String message)`: Receives the name of datasource connection to which you need to connect, a primary key value, a `KAssertExistsFunction` that allows adding new conditions to the base query and the HttpStatus and message to throw.

## Example: Y, HttpStatus, String

Java code:

```java
languageRepository.assertNotExistsById(
    151L,
    HttpStatus.BAD_REQUEST,
    "Language does exists!"
);
```

SQL generated:

```sql
SELECT NOT (
    EXISTS (
        SELECT ?1
        FROM language la
        WHERE la.id = ?2
    )
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** 151

## Example: Y, KAssertExistsFunction, HttpStatus, String

Java code:

```java
languageRepository.assertNotExistsById(
    151L,
    (KWhere kWhere) ->
        kWhere
            .and(LANGUAGE.ACTIVE.isTrue()),
    HttpStatus.BAD_REQUEST,
    "Language does exists!"
);
```

SQL generated:

```sql
SELECT NOT (
    EXISTS (
        SELECT ?1
        FROM language la
        WHERE la.id = ?2
        AND la.active IS TRUE
    )
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** 151

## Example: String, Y, KAssertExistsFunction, HttpStatus, String

Java code:

```java
languageRepository.assertNotExistsById(
    K.JDBC_LEGACY,
    151L,
    (KWhere kWhere) ->
        kWhere
            .and(LANGUAGE.ACTIVE.isTrue()),
    HttpStatus.BAD_REQUEST,
    "Language does exists!"
);
```

SQL generated:

```sql
SELECT NOT (
    EXISTS (
        SELECT ?1
        FROM language la
        WHERE la.id = ?2
        AND la.active IS TRUE
    )
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** 151