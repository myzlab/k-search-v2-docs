---
title: Count Distinct By
sidebar_label: Count Distinct By
---

## Definition

The `countDistinctBy` method allows you to count the number of unique values in the column or expression of a table that meet the given conditions.

## Available methods

- `countDistinctBy(KCountFunction<KFrom, KQuery> kCountFunction, KColumn kColumn)`: Receives a `KCountFunction` that allows adding conditions to the base query and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.
- `countDistinctBy(String jdbc, KCountFunction<KFrom, KQuery> kCountFunction, KColumn kColumn)`: Receives the name of datasource connection to which you need to connect, a `KCountFunction` that allows adding conditions to the base query and a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `count` method.

## Example: KCountFunction, KColumn

Java code:

```java
final Long totalRecords =
    languageRepository.countDistinctBy(
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.gt(12L)),
        LANGUAGE.ID
    );
```

SQL generated:

```sql
SELECT COUNT(DISTINCT la.id)
FROM auth.language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 12

## Example: String, KCountFunction, KColumn

Java code:

```java
final Long totalRecords =
    languageRepository.countDistinctBy(
        K.JDBC_LEGACY,
        (KFrom kFrom) ->
            kFrom
                .where(LANGUAGE.ID.gt(12L)),
        LANGUAGE.ID
    );
```

SQL generated:

```sql
SELECT COUNT(DISTINCT la.id)
FROM auth.language la
WHERE la.id > ?1
```

Parameters:

- **?1:** 12