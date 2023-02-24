---
title: Quote Ident
sidebar_label: Quote Ident
---

## Definition

The `quoteIdent` method allows you to add the `QUOTE_IDENT` function to the query. The `QUOTE_IDENT` function return the given string suitably quoted to be used as an identifier in an SQL statement string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `quoteIdent()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `QUOTE_IDENT` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.quoteIdent()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    QUOTE_IDENT(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class are:

- `quoteIdent(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `QUOTE_IDENT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    quoteIdent(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    QUOTE_IDENT(au.email)
FROM app_user au
```

Parameters:

- None