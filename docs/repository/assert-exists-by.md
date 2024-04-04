---
title: Assert Exists By
sidebar_label: Assert Exists By
---

## Definition

The `assertExistsBy` method allows you to confirm that at least a record exists in a table, filtered by the conditions that are supplied. If no record exists, this method throws a KException.

## Available methods

- `assertExistsBy(KExistsFunction<KFrom, KQuery> kExistsFunction, HttpStatus httpStatus, String message)`: Receives a `KExistsFunction` that allows adding conditions to the base query and the HttpStatus and message to throw.
- `assertExistsBy(String jdbc, KExistsFunction<KFrom, KQuery> kExistsFunction, HttpStatus httpStatus, String message)`: Receives the name of datasource connection to which you need to connect, a `KExistsFunction` that allows adding new conditions to the base query and the HttpStatus and message to throw.

## Example: kExistsFunction, HttpStatus, String

Java code:

```java
final String filter = "GLI";

languageRepository.assertExistsBy(
    (KFrom kFrom) ->
        kFrom
            .where(LANGUAGE.NAME.ilka(filter)),
    HttpStatus.NOT_FOUND,
    "No language exists!"
);
```

SQL generated:

```sql
SELECT EXISTS (
    SELECT ?1
    FROM auth.language_ la
    WHERE la.name ILIKE ?2
) AS "_🕆_GOD_BLESS_YOU_🕆_"
```

Parameters:

- **?1:** 1
- **?2:** %GLI%

## Example: String, kExistsFunction, HttpStatus, String

Java code:

```java
final String filter = "GLI";

languageRepository.assertExistsBy(
    K.JDBC_LEGACY,
    (KFrom kFrom) ->
        kFrom
            .where(LANGUAGE.NAME.ilka(filter)),
    HttpStatus.NOT_FOUND,
    "No language exists!"
);
```

SQL generated:

```sql
SELECT EXISTS (
    SELECT ?1
    FROM auth.language_ la
    WHERE la.name ILIKE ?2
) AS "_🕆_GOD_BLESS_YOU_🕆_"
```

Parameters:

- **?1:** 1
- **?2:** %GLI%