---
title: Find All
sidebar_label: Find All
---

## Definition

The `findAll` method allows you to get all records of a table.

The methods available to use this functionality are:

- `findAll(KColumnAllowedToSelect... selects)`: Receives a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `findAll(String jdbc, KColumnAllowedToSelect... selects)`: Receives the name of datasource connection to which you need to connect and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: KColumnAllowedToSelect...

Java code:

```java
final KCollection<Language> languages = languageRepository.findAll(
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
SELECT la.name, la.file
FROM language la
```

Parameters:

- None

## Example: String, KColumnAllowedToSelect...

Java code:

```java
final KCollection<Language> languages = languageRepository.findAll(
    K.JDBC_LEGACY,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
SELECT la.name, la.file
FROM language la
```

Parameters:

- None