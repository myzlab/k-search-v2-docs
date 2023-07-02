---
title: Count
sidebar_label: Count
---

## Definition

The `count` method allows you to count all records of a table. It is possible to count by a specific column.

## Available methods

- `count()`: It does not receive any parameters.
- `count(String jdbc)`: Receives the name of datasource connection to which you need to connect.
- `count(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.
- `count(String jdbc, KColumn kColumn)`: Receives the name of datasource connection to which you need to connect and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.

## Example: No parameter

Java code:

```java
final long count = languageRepository.count();
```

SQL generated:

```sql
SELECT COUNT(*)
FROM language la
```

Parameters:

- None

## Example: String

Java code:

```java
final long count = languageRepository.count(
    K.JDBC_LEGACY
);
```

SQL generated:

```sql
SELECT COUNT(*)
FROM language la
```

Parameters:

- None

## Example: KColumn

Java code:

```java
final long count = languageRepository.count(
    LANGUAGE.I18N_KEY
);
```

SQL generated:

```sql
SELECT COUNT(la.i18n_key)
FROM language la
```

Parameters:

- None

## Example: String, KColumn

Java code:

```java
final long count = languageRepository.count(
    K.JDBC_LEGACY,
    LANGUAGE.I18N_KEY
);
```

SQL generated:

```sql
SELECT COUNT(la.i18n_key)
FROM language la
```

Parameters:

- None