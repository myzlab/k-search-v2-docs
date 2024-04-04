---
title: Exists By
sidebar_label: Exists By
---

## Definition

The `existsBy` method allows you to get a boolean value indicating whether at least a record exists in a table, filtered by the conditions that are supplied.

## Available methods

- `existsBy(KExistsFunction<KFrom, KQuery> kExistsFunction)`: Receives a `KExistsFunction` that allows adding conditions to the base query.
- `existsBy(String jdbc, KExistsFunction<KFrom, KQuery> kExistsFunction)`: Receives the name of datasource connection to which you need to connect and a `KExistsFunction` that allows adding conditions to the base query.

## Example: KExistsFunction

Java code:

```java
final boolean exists =
    languageRepository.existsBy(
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.eq(7L))
                .and(LANGUAGE.NAME.ilka("es"))
    );
```

SQL generated:

```sql
SELECT EXISTS (
    SELECT ?1
    FROM auth.language_ la
    WHERE la.id = ?2
    AND la.name ILIKE ?3
) AS "_🕆_GOD_BLESS_YOU_🕆_"
```

Parameters:

- **?1:** 1
- **?2:** 7
- **?3:** %es%

## Example: String, KExistsFunction

Java code:

```java
final boolean exists =
    languageRepository.existsBy(
        K.JDBC_LEGACY,
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.eq(7L))
                .and(LANGUAGE.NAME.ilka("es"))
    );
```

SQL generated:

```sql
SELECT EXISTS (
    SELECT ?1
    FROM auth.language_ la
    WHERE la.id = ?2
    AND la.name ILIKE ?3
) AS "_🕆_GOD_BLESS_YOU_🕆_"
```

Parameters:

- **?1:** 1
- **?2:** 7
- **?3:** %es%