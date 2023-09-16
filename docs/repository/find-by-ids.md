---
title: Find By Ids
sidebar_label: Find By Ids
---

## Definition

The `findByIds` method allows you to get multiple records of a table filtered by its primary key.

## Available methods

- `findByIds(List<Y> ids, KColumnAllowedToSelect... selects)`: Receives a list with multiple primary keys value and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `findByIds(String jdbc, List<Y> ids, KColumnAllowedToSelect... selects)`: Receives the name of datasource connection to which you need to connect, a list with multiple primary keys value and a variable quantity of columns and values that will be added to the `SELECT` list. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: List&lt;Y&gt;, KColumnAllowedToSelect...

Java code:

```java
final ArrayList ids = new ArrayList();
ids.add(11L);
ids.add(16L);

final Language language = languageRepository.findByIds(
    ids,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
SELECT la.name, la.file
FROM auth.language la
WHERE la.id IN (?1, ?2)
```

Parameters:

- **?1:** 11
- **?2:** 16

## Example: String, List&lt;Y&gt;, KColumnAllowedToSelect...

Java code:

```java
final ArrayList ids = new ArrayList();
ids.add(11L);
ids.add(16L);

final Language language = languageRepository.findByIds(
    K.JDBC_LEGACY,
    ids,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
SELECT la.name, la.file
FROM auth.language la
WHERE la.id IN (?1, ?2)
```

Parameters:

- **?1:** 11
- **?2:** 16