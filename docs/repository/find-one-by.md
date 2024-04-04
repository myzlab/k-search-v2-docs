---
title: Find One By
sidebar_label: Find One By
---

## Definition

The `findOneBy` method allows you to get one record of a table filtered by the conditions that are supplied.

:::caution

If the constructed query returns 0 or more than one record, this method will return a null KRow.

:::

## Available methods

- `findOneBy(KFindFunction<KFrom, KQuery> kFindFunction, KColumnAllowedToSelect... selects)`: Receives a `KFindFunction` that allows adding conditions to the base query and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `findOneBy(String jdbc, KFindFunction<KFrom, KQuery> kFindFunction, KColumnAllowedToSelect... selects)`: Receives the name of datasource connection to which you need to connect, a `KFindFunction` that allows adding conditions to the base query and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: KFindFunction, KColumnAllowedToSelect...

Java code:

```java
final Language language =
    languageRepository.findOneBy(
        (KFrom kFrom) -> 
            kFrom
            .where(LANGUAGE.ID.eq(7L)),
        LANGUAGE.ID,
        LANGUAGE.NAME
    );
```

SQL generated:

```sql
SELECT la.id, la.name
FROM language la
WHERE la.id = ?1
```

Parameters:

- **?1:** 7

## Example: String, KFindFunction, KColumnAllowedToSelect...

Java code:

```java
final Language language =
    languageRepository.findOneBy(
        K.JDBC_LEGACY,
        (KFrom kFrom) -> 
            kFrom
            .where(LANGUAGE.ID.eq(7L)),
        LANGUAGE.ID,
        LANGUAGE.NAME
    );
```

SQL generated:

```sql
SELECT la.id, la.name
FROM language la
WHERE la.id = ?1
```

Parameters:

- **?1:** 7