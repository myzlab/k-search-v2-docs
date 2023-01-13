---
title: Array Agg
sidebar_label: Array Agg
---

## Definition

The `arrayAgg` method allows you to add a `ARRAY_AGG` function to the query. The `ARRAY_AGG` is a function that accepts a set of values and returns an array in which each value in the set is assigned to an element of the array.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) is:

- `arrayAgg()`: It does not receive any parameters. The [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) that invokes the method will be the one supplied to the `ARRAY_AGG` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.arrayAgg(),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_AGG(au.email),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `arrayAgg(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `ARRAY_AGG` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    arrayAgg(APP_USER.EMAIL),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    ARRAY_AGG(au.email),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- None

## Support for the `ORDER BY` clause

The `ARRAY_AGG` function supports being used with an `ORDER BY` clause.

The only one method available to use this functionality is:

- `orderBy(KColumnAllowedToOrderBy... kColumnsAllowedToOrderBy)`: Receives a variable quantity of columns that will be added to the [`ORDER BY`](/docs/select-statement/select/) clause. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`KRaw`](/docs/select-statement/select/introduction#7-kraw).

This method is only available after calling the `arrayAgg` method and is completely optional.

### Example

Java code:

```java
k
.select(
    arrayAgg(
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
    ARRAY_AGG(
        CONCAT(au.first_name || ? || au.last_name
    ) ORDER BY au.first_name ASC, au.last_name DESC),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** " "