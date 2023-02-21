---
title: Char Length
sidebar_label: Char Length
---

## Definition

The `charLength` method allows you to add the `CHAR_LENGTH` function to the query. The `CHAR_LENGTH` function is used to count the number of characters in a specified string. The `CHARACTER_LENGTH` function is similar to `CHAR_LENGTH` function.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `charLength()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `CHAR_LENGTH` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.charLength()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CHAR_LENGTH(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `charLength(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `CHAR_LENGTH` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    charLength(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CHAR_LENGTH(au.email)
FROM app_user au
```

Parameters:

- None