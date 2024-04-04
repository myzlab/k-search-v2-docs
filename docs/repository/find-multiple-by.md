---
title: Find Multiple By
sidebar_label: Find Multiple By
---

## Definition

The `findMultipleBy` method allows you to get multiple records of a table filtered by the conditions that are supplied.

## Available methods

- `findMultipleBy(KFindFunction<KFrom, KQuery> kFindFunction, KColumnAllowedToSelect... selects)`: Receives a `KFindFunction` that allows adding conditions to the base query and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `findMultipleBy(String jdbc, KFindFunction<KFrom, KQuery> kFindFunction, KColumnAllowedToSelect... selects)`: Receives the name of datasource connection to which you need to connect, a `KFindFunction` that allows adding conditions to the base query and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: KFindFunction, KColumnAllowedToSelect...

Java code:

```java
final KCollection<Language> languages =
    languageRepository.findMultipleBy(
        (KFrom kFrom) -> 
            kFrom
            .where(LANGUAGE.ID.gt(7L)),
        LANGUAGE.ID,
        LANGUAGE.NAME
    );
```

SQL generated:

```sql
SELECT la.id, la.name
FROM language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 7

## Example: String, KFindFunction, KColumnAllowedToSelect...

Java code:

```java
final KCollection<Language> languages =
    languageRepository.findMultipleBy(
        K.JDBC_LEGACY,
        (KFrom kFrom) -> 
            kFrom
            .where(LANGUAGE.ID.gt(7L)),
        LANGUAGE.ID,
        LANGUAGE.NAME
    );
```

SQL generated:

```sql
SELECT la.id, la.name
FROM language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 7