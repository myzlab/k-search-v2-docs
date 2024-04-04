---
title: Delete By
sidebar_label: Delete By
---

## Definition

The `deleteBy` method allows you to delete one or more records from a table that meet the given conditions.

## Available methods

- `deleteBy(KDeleteFunction<KDeleteFrom, KWhereDelete> kDeleteFunction)`: Receives a `KDeleteFunction` that allows adding conditions to the base query.
- `deleteBy(String jdbc, KDeleteFunction<KDeleteFrom, KWhereDelete> kDeleteFunction)`: Receives the name of datasource connection to which you need to connect and a `KDeleteFunction` that allows adding conditions to the base query.
- `deleteBy(KDeleteFunction<KDeleteFrom, KWhereDelete> kDeleteFunction, KColumnAllowedToReturning... selects)`: Receives a `KDeleteFunction` that allows adding conditions to the base query and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `deleteBy(String jdbc, KDeleteFunction<KDeleteFrom, KWhereDelete> kDeleteFunction, KColumnAllowedToReturning... selects)`: Receives the name of datasource connection to which you need to connect, a `KDeleteFunction` that allows adding conditions to the base query and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: KDeleteFunction

Java code:

```java
final int totalRecordsDeleted =
    languageRepository.deleteBy(
        (KDeleteFrom kDeleteFrom) -> 
            kDeleteFrom
                .where(LANGUAGE.ID.gt(11L))
    );
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 11

## Example: String, KDeleteFunction

Java code:

```java
final int totalRecordsDeleted =
    languageRepository.deleteBy(
        K.JDBC_LEGACY,
        (KDeleteFrom kDeleteFrom) -> 
            kDeleteFrom
                .where(LANGUAGE.ID.gt(11L))
    );
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 11

## Example: KDeleteFunction, KColumnAllowedToReturning...

Java code:

```java
final KCollection<Language> languages = 
    languageRepository.deleteBy(
        (KDeleteFrom kDeleteFrom) -> 
            kDeleteFrom
                .where(LANGUAGE.ID.gt(11L)),
        LANGUAGE.ID
    );
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 11

## Example: String, KDeleteFunction, KColumnAllowedToReturning...

Java code:

```java
final KCollection<Language> languages = 
    languageRepository.deleteBy(
        K.JDBC_LEGACY,
        (KDeleteFrom kDeleteFrom) -> 
            kDeleteFrom
                .where(LANGUAGE.ID.gt(11L)),
        LANGUAGE.ID
    );
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 11