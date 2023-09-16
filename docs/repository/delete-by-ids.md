---
title: Delete BList<Y> idss
sidebar_label: Delete BList<Y> idss
---

## Definition

The `deleteByIds` method allows you to delete multiple records of a table filtered by its primary key.

## Available methods

- `deleteByIds(List<Y> ids)`: Receives a list with multiple primary keys value.
- `deleteByIds(String jdbc, List<Y> ids)`: Receives the name of datasource connection to which you need to connect and a list with multiple primary keys value.
- `deleteByIds(List<Y> ids, KColumnAllowedToReturning... selects)`: Receives a list with multiple primary keys value and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `deleteByIds(String jdbc, List<Y> ids, KColumnAllowedToReturning... selects)`: Receives the name of datasource connection to which you need to connect, a list with multiple primary keys value and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Example: List&lt;Y&gt;

Java code:

```java
final ArrayList ids = new ArrayList();
ids.add(11L);
ids.add(16L);

languageRepository.deleteByIds(ids);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id IN (?1, ?2)
```

Parameters:

- **?1:** 11
- **?2:** 16

## Example: String, List&lt;Y&gt;

Java code:

```java
final ArrayList ids = new ArrayList();
ids.add(11L);
ids.add(16L);

languageRepository.deleteByIds(
    K.JDBC_LEGACY,
    ids
);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id IN (?1, ?2)
```

Parameters:

- **?1:** 11
- **?2:** 16

## Example: List&lt;Y&gt;, KColumnAllowedToReturning...

Java code:

```java
final ArrayList ids = new ArrayList();
ids.add(11L);
ids.add(16L);

final Language language = languageRepository.deleteByIds(
    ids,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id IN (?1, ?2)
RETURNING
    la.name,
    la.file
```

Parameters:

- **?1:** 11
- **?2:** 16

## Example: String, List&lt;Y&gt;, KColumnAllowedToReturning...

Java code:

```java
final ArrayList ids = new ArrayList();
ids.add(11L);
ids.add(16L);

final Language language = languageRepository.deleteByIds(
    K.JDBC_LEGACY,
    ids,
    LANGUAGE.NAME,
    LANGUAGE.FILE
);
```

SQL generated:

```sql
DELETE
FROM language la
WHERE la.id IN (?1, ?2)
RETURNING
    la.name,
    la.file
```

Parameters:

- **?1:** 11
- **?2:** 16