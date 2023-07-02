---
title: Find By Id
sidebar_label: Find By Id
---

## Definition

The `findById` method allows you to get one record of a table filtered by its primary key.

## Available methods

- `findById(Y id, KColumnAllowedToSelect... selects)`: Receives a primary key value and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `findById(String jdbc, Y id, KColumnAllowedToSelect... selects)`: Receives the name of datasource connection to which you need to connect, a primary key value and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: Y, KColumnAllowedToSelect...

Java code:

```java
final Language language = languageRepository.findById(
    11L,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
SELECT la.name, la.file
FROM auth.language la
WHERE la.id = ?1
```

Parameters:

- **?1:** 11

## Example: String, Y, KColumnAllowedToSelect...

Java code:

```java
final Language language = languageRepository.findById(
    K.JDBC_LEGACY,
    11L,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
SELECT la.name, la.file
FROM auth.language la
WHERE la.id = ?1
```

Parameters:

- **?1:** 11