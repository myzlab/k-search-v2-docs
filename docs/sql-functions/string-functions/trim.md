---
title: Trim
sidebar_label: Trim
---

## Definition

The `trim` method allows you to add the `TRIM` function to the query. The `TRIM` function removes the longest string containing only characters specified by the argument (whitespace by default) from the start and end of a string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The methods available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) are:

- `trim()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `TRIM` function.
- `trim(String characters)`: Receives a String which will be supplied to the `TRIM` function. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `TRIM` function.

### Example: ()

Java code:

```java
k
.select(
    APP_USER.EMAIL.trim()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TRIM(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (String)

Java code:

```java
k
.select(
    APP_USER.EMAIL.trim("xyz")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TRIM(au.email, ?1)
FROM app_user au
```

Parameters:

- **?1:** "xyz"

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `trim(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `TRIM` function.
- `trim(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `TRIM` function.
- `trim(KColumn kColumn, String characters)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a String which will be supplied to the `TRIM` function.
- `trim(KValTextField kValTextField, String characters)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and a String which will be supplied to the `TRIM` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    trim(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TRIM(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    trim(val("A short text "))
)
.single();
```

SQL generated:

```sql
SELECT TRIM(?1)
```

Parameters:

- **?1:** "A short text "

### Example: (KColumn, String)

Java code:

```java
k
.select(
    trim(APP_USER.EMAIL, "xyz")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TRIM(au.email, ?1)
FROM app_user au
```

Parameters:

- **?1:** "xyz"

### Example: (KValTextField, String)

Java code:

```java
k
.select(
    trim(val("A short text"), "xt")
)
.single();
```

SQL generated:

```sql
SELECT TRIM(?1, ?2)
```

Parameters:

- **?1:** "A short text"
- **?2:** "xt"