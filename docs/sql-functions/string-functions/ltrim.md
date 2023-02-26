---
title: Ltrim
sidebar_label: Ltrim
---

## Definition

The `ltrim` method allows you to add the `LTRIM` function to the query. The `LTRIM` function removes the longest string containing only characters specified by the argument (whitespace by default) from the start of a string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The methods available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) are:

- `ltrim()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `LTRIM` function.
- `ltrim(String characters)`: Receives a String which will be supplied to the `LTRIM` function. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `LTRIM` function.

### Example: ()

Java code:

```java
k
.select(
    APP_USER.EMAIL.ltrim()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    LTRIM(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (String)

Java code:

```java
k
.select(
    APP_USER.EMAIL.ltrim("xyz")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    LTRIM(au.email, ?1)
FROM app_user au
```

Parameters:

- **?1:** "xyz"

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `ltrim(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `LTRIM` function.
- `ltrim(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `LTRIM` function.
- `ltrim(KColumn kColumn, String characters)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a String which will be supplied to the `LTRIM` function.
- `ltrim(KValTextField kValTextField, String characters)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and a String which will be supplied to the `LTRIM` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    ltrim(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    LTRIM(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    ltrim(val(" A short text"))
)
.single();
```

SQL generated:

```sql
SELECT LTRIM(?1)
```

Parameters:

- **?1:** " A short text"

### Example: (KColumn, String)

Java code:

```java
k
.select(
    ltrim(APP_USER.EMAIL, "xyz")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    LTRIM(au.email, ?1)
FROM app_user au
```

Parameters:

- **?1:** "xyz"

### Example: (KValTextField, String)

Java code:

```java
k
.select(
    ltrim(val("A short text"), "A")
)
.single();
```

SQL generated:

```sql
SELECT LTRIM(?1, ?2)
```

Parameters:

- **?1:** "A short text"
- **?2:** "A"