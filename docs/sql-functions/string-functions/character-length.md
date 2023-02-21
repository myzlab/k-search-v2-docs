---
title: Character Length
sidebar_label: Character Length
---

## Definition

The `characterLength` method allows you to add the `CHARACTER_LENGTH` function to the query. The `CHARACTER_LENGTH` function is used to count the number of characters in a specified string. The `CHAR_LENGTH` function is similar to `CHARACTER_LENGTH` function.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `characterLength()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `CHARACTER_LENGTH` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.characterLength()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CHARACTER_LENGTH(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `characterLength(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `CHARACTER_LENGTH` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    characterLength(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CHARACTER_LENGTH(au.email)
FROM app_user au
```

Parameters:

- None