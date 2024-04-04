---
title: Assert Not Exists By
sidebar_label: Assert Not Exists By
---

## Definition

The `assertNotExistsBy` method allows you to confirm that no record exists in a table, filtered by the conditions that are supplied. If at least one record exists, this method throws a KException.

## Available methods

- `assertNotExistsBy(KExistsFunction<KFrom, KQuery> kExistsFunction, HttpStatus httpStatus, String message)`: Receives a `KExistsFunction` that allows adding conditions to the base query and the HttpStatus and message to throw.
- `assertNotExistsBy(String jdbc, KExistsFunction<KFrom, KQuery> kExistsFunction, HttpStatus httpStatus, String message)`: Receives the name of datasource connection to which you need to connect, a `KExistsFunction` that allows adding new conditions to the base query and the HttpStatus and message to throw.

## Example: kExistsFunction, HttpStatus, String

Java code:

```java
final String filter = "GLI";

languageRepository.assertNotExistsBy(
    (KFrom kFrom) ->
        kFrom
            .where(LANGUAGE.NAME.ilka(filter)),
    HttpStatus.NOT_FOUND,
    "At least one language exists!"
);
```

SQL generated:

```sql
SELECT NOT (
    EXISTS (
        SELECT ?1
        FROM auth.language la
        WHERE la.name ILIKE ?2
    )
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** %GLI%

## Example: String, kExistsFunction, HttpStatus, String

Java code:

```java
final String filter = "GLI";

languageRepository.assertNotExistsBy(
    K.JDBC_LEGACY,
    (KFrom kFrom) ->
        kFrom
            .where(LANGUAGE.NAME.ilka(filter)),
    HttpStatus.NOT_FOUND,
    "At least one language exists!"
);
```

SQL generated:

```sql
SELECT NOT (
    EXISTS (
        SELECT ?1
        FROM auth.language la
        WHERE la.name ILIKE ?2
    )
) AS "GOD_BLESS_YOU"
```

Parameters:

- **?1:** 1
- **?2:** %GLI%