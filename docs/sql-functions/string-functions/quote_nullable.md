---
title: Quote Nullable
sidebar_label: Quote Nullable
---

## Definition

The `quoteNullable` method allows you to add the `QUOTE_NULLABLE` function to the query. The `QUOTE_NULLABLE` function return the given string suitably quoted to be used as a string literal in an SQL statement string; or, if the argument is null, return `NULL`.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `quoteNullable()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `QUOTE_NULLABLE` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.quoteNullable()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    QUOTE_NULLABLE(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class are:

- `quoteNullable(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `QUOTE_NULLABLE` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    quoteNullable(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    QUOTE_NULLABLE(au.email)
FROM app_user au
```

Parameters:

- None