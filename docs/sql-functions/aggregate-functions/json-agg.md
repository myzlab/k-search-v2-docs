---
title: Json Agg
sidebar_label: Json Agg
---

## Definition

The `jsonAgg` method allows you to add a `JSON_AGG` function to the query. The `JSON_AGG` is a function that accepts a set of values and returns a JSON array in which each value in the set is assigned to an element of the JSON array.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) is:

- `jsonAgg()`: It does not receive any parameters. The [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) that invokes the method will be the one supplied to the `JSON_AGG` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.jsonAgg(),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    JSON_AGG(au.email),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `jsonAgg(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `JSON_AGG` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    jsonAgg(APP_USER.EMAIL),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    JSON_AGG(au.email),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## Support for the `ORDER BY` clause

The `JSON_AGG` function supports being used with an `ORDER BY` clause.

The only one method available to use this functionality is:

- `orderBy(KColumnAllowedToOrderBy... kColumnsAllowedToOrderBy)`: Receives a variable quantity of columns that will be added to the [`ORDER BY`](/docs/select-statement/select/) clause. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`KRaw`](/docs/select-statement/select/introduction#7-kraw).

This method is only available after calling the `jsonAgg` method and is completely optional.

### Example

Java code:

```java
k
.select(
    jsonAgg(
        concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME)
    ).orderBy(APP_USER.FIRST_NAME.asc(), APP_USER.LAST_NAME.desc())
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    JSON_AGG(
        CONCAT(au.first_name || ?1 || au.last_name
    ) ORDER BY au.first_name ASC, au.last_name DESC),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** " "