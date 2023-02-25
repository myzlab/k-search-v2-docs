---
title: Octet Length
sidebar_label: Octet Length
---

## Definition

The `octetLength` method allows you to add the `OCTET_LENGTH` function to the query. The `OCTET_LENGTH` function is used to count the number of bytes in a specified string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `octetLength()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `OCTET_LENGTH` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.octetLength()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    OCTET_LENGTH(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `octetLength(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `OCTET_LENGTH` function.
- `octetLength(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `OCTET_LENGTH` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    octetLength(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    OCTET_LENGTH(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    octetLength(val("A short text"))
)
.single();
```

SQL generated:

```sql
SELECT OCTET_LENGTH(?1)
```

Parameters:

- **?1:** "A short text"