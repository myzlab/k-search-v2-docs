---
title: Md5
sidebar_label: Md5
---

## Definition

The `md5` method allows you to add the `MD5` function to the query. The `MD5` function is used to calculate the MD5 hash of a string and returns the result in hexadecimal.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `md5()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `MD5` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.md5()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    MD5(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `md5(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `MD5` function.
- `md5(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `MD5` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    md5(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    MD5(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    md5(val("A short text"))
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    MD5(?1)
FROM app_user au
```

Parameters:

- **?1:** "A short text"