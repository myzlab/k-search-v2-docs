---
title: Delete All
sidebar_label: Delete All
---

## Definition

The `deleteAll` method allows you to delete all records of a table.

The methods available to use this functionality are:

- `deleteAll()`: It does not receive any parameters.
- `deleteAll(String jdbc)`: Receives the name of datasource connection to which you need to connect.
- `deleteAll(KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `deleteAll(String jdbc, KColumnAllowedToReturning... kColumnsAllowedToReturnings)`: Receives the name of datasource connection to which you need to connect and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: No parameter

Java code:

```java
languageRepository.deleteAll();
```

SQL generated:

```sql
DELETE
FROM language la
```

Parameters:

- None

## Example: String

Java code:

```java
languageRepository.deleteAll(K.JDBC_LEGACY);
```

SQL generated:

```sql
DELETE
FROM language la
```

Parameters:

- None

## Example: KColumnAllowedToReturning...

Java code:

```java
final KCollection<Language> languages = languageRepository.deleteAll(
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
DELETE
FROM language la
RETURNING
    la.name,
    la.file
```

Parameters:

- None

## Example: String, KColumnAllowedToReturning...

Java code:

```java
final KCollection<Language> languages = languageRepository.deleteAll(
    K.JDBC_LEGACY,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
DELETE
FROM language la
RETURNING
    la.name,
    la.file
```

Parameters:

- None