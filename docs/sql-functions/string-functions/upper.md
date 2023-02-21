---
title: Upper
sidebar_label: Upper
---

## Definition

The `upper` method allows you to add the `UPPER` function to the query. The `UPPER` function is used to convert a string from lower case to upper case.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `upper()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `UPPER` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.upper()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    UPPER(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `upper(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `UPPER` function.
- `upper(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `UPPER` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    upper(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    UPPER(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    upper(val("A short text"))
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    UPPER(?1)
FROM app_user au
```

Parameters:

- **?1:** "A short text"