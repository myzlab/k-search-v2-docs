---
title: String Agg
sidebar_label: String Agg
---

## Definition

The `stringAgg` method allows you to add a `STRING_AGG` function to the query. The `STRING_AGG` is a function that concatenates a list of strings and places a separator between them. The `STRING_AGG` function does not add the separator at the end of the string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) is:

- `stringAgg(KBaseColumnCastable kBaseColumnCastableDelimiter)`: The [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) that invokes the method will be the one supplied to the `STRING_AGG` function. Additionally, receives a delimiter which too will be supplied to the `STRING_AGG` function. Among the possible values of this delimiter are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/select/introduction#3-values).

### Example

Java code:

```java
k
.select(
    concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).stringAgg(val(",")),
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT 
    STRING_AGG(
        CONCAT(au.first_name || ?1 || au.last_name), ?2
    ),
    CAST(au.created_at AS DATE)
FROM auth.app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** " "
- **?2:** ","

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `stringAgg(KColumn kColumn, KBaseColumnCastable kBaseColumnCastableDelimiter)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `STRING_AGG` function. Additionally, receives a delimiter which too will be supplied to the `STRING_AGG` function. Among the possible values of this delimiter are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/select/introduction#3-values).


To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    stringAgg(
        concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME), val(",")
    )
    APP_USER.CREATED_AT.cast(date())
)
.from(APP_USER)
.groupBy(APP_USER.CREATED_AT.cast(date()))
.multiple();
```

SQL generated:

```sql
SELECT
    STRING_AGG(
        CONCAT(au.first_name || ?1 || au.last_name), ?2
    ),
    CAST(au.created_at AS DATE)
FROM app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** " "
- **?2:** ","

## Support for the `ORDER BY` clause

The `STRING_AGG` function supports being used with an `ORDER BY` clause.

The only one method available to use this functionality is:

- `orderBy(KColumnAllowedToOrderBy... kColumnsAllowedToOrderBy)`: Receives a variable quantity of columns that will be added to the [`ORDER BY`](/docs/select-statement/select/) clause. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`KRaw`](/docs/select-statement/select/introduction#7-kraw).

This method is only available after calling the `stringAgg` method and is completely optional.

### Example

Java code:

```java
k
.select(
    stringAgg(
        concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME), val(",")
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
    STRING_AGG(
        CONCAT(au.first_name || ?1 || au.last_name), ?2
        ORDER BY au.first_name ASC, au.last_name DESC
    ),
    CAST(au.created_at AS DATE)
FROM auth.app_user au
GROUP BY CAST(au.created_at AS DATE)
```

Parameters:

- **?1:** " "
- **?2:** ","