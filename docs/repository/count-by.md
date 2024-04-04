---
title: Count By
sidebar_label: Count By
---

## Definition

The `countBy` method allows you to count total records from a table that meet the given conditions.

## Available methods

- `countBy(KCountFunction<KFrom, KQuery> kCountFunction)`: Receives a `KCountFunction` that allows adding conditions to the base query.
- `countBy(String jdbc, KCountFunction<KFrom, KQuery> kCountFunction)`: Receives the name of datasource connection to which you need to connect and a `KCountFunction` that allows adding conditions to the base query.
- `countBy(KCountFunction<KFrom, KQuery> kCountFunction, KColumn kColumn)`: Receives a `KCountFunction` that allows adding conditions to the base query and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.
- `countBy(String jdbc, KCountFunction<KFrom, KQuery> kCountFunction, KColumn kColumn)`: Receives the name of datasource connection to which you need to connect, a `KCountFunction` that allows adding conditions to the base query and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.

## Example: KCountFunction

Java code:

```java
final Long totalRecords =
    languageRepository.countBy(
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.gt(12L))
    );
```

SQL generated:

```sql
SELECT COUNT(*)
FROM auth.language la
WHERE la.id > ?
```

Parameters:

- **?1:** 12

## Example: String, KCountFunction

Java code:

```java
final Long totalRecords =
    languageRepository.countBy(
        K.JDBC_LEGACY,
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.gt(12L))
    );
```

SQL generated:

```sql
SELECT COUNT(*)
FROM auth.language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 12

## Example: KCountFunction, KColumn

Java code:

```java
final Long totalRecords =
    languageRepository.countBy(
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.gt(12L)),
        LANGUAGE.ID
    );
```

SQL generated:

```sql
SELECT COUNT(la.id)
FROM auth.language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 12

## Example: String, KCountFunction, KColumn

Java code:

```java
final Long totalRecords =
    languageRepository.countBy(
        K.JDBC_LEGACY,
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.gt(12L)),
        LANGUAGE.ID
    );
```

SQL generated:

```sql
SELECT COUNT(la.id)
FROM auth.language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 12