---
title: Delete By Id
sidebar_label: Delete By Id
---

## Definition

The `deleteById` method allows you to delete one record of a table filtered by its primary key.

## Available methods

- `deleteById(Y id)`: Receives a primary key value.
- `deleteById(String jdbc, Y id)`: Receives the name of datasource connection to which you need to connect and a primary key value.
- `deleteById(Y id, KColumnAllowedToReturning... selects)`: Receives a primary key value and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `deleteById(String jdbc, Y id, KColumnAllowedToReturning... selects)`: Receives the name of datasource connection to which you need to connect, a primary key value and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: Y

Java code:

```java
languageRepository.deleteById(11L);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id = ?1
```

Parameters:

- **?1:** 11

## Example: String, Y

Java code:

```java
languageRepository.deleteById(
    K.JDBC_LEGACY,
    11L
);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id = ?1
```

Parameters:

- **?1:** 11

## Example: Y, KColumnAllowedToReturning...

Java code:

```java
final Language language = languageRepository.deleteById(
    11L,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id = ?1
RETURNING
    la.name,
    la.file
```

Parameters:

- **?1:** 11

## Example: String, Y, KColumnAllowedToReturning...

Java code:

```java
final Language language = languageRepository.deleteById(
    K.JDBC_LEGACY,
    11L,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id = ?1
RETURNING
    la.name,
    la.file
```

Parameters:

- **?1:** 11