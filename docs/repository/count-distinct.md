---
title: Count Distinct
sidebar_label: Count Distinct
---

## Definition

The `countDistinct` method allows you to count the number of unique values in the column or expression of a table.

## Available methods

- `countDistinct(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.
- `countDistinct(String jdbc, KColumn kColumn)`: Receives the name of datasource connection to which you need to connect and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.

## Example: KColumn

Java code:

```java
final long count = languageRepository.countDistinct(
    LANGUAGE.I18N_KEY
);
```

SQL generated:

```sql
SELECT COUNT(
    DISTINCT la.i18n_key
)
FROM language la
```

Parameters:

- None

## Example: String, KColumn

Java code:

```java
final long count = languageRepository.countDistinct(
    K.JDBC_LEGACY,
    LANGUAGE.I18N_KEY
);
```

SQL generated:

```sql
SELECT COUNT(
    DISTINCT la.i18n_key
)
FROM language la
```

Parameters:

- None