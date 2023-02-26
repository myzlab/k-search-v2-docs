---
title: Rtrim
sidebar_label: Rtrim
---

## Definition

The `rtrim` method allows you to add the `RTRIM` function to the query. The `RTRIM` function removes the longest string containing only characters specified by the argument (whitespace by default) from the end of a string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The methods available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) are:

- `rtrim()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `RTRIM` function.
- `rtrim(String characters)`: Receives a String which will be supplied to the `RTRIM` function. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `RTRIM` function.

### Example: ()

Java code:

```java
k
.select(
    APP_USER.EMAIL.rtrim()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    RTRIM(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (String)

Java code:

```java
k
.select(
    APP_USER.EMAIL.rtrim("xyz")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    RTRIM(au.email, ?1)
FROM app_user au
```

Parameters:

- **?1:** "xyz"

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `rtrim(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `RTRIM` function.
- `rtrim(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `RTRIM` function.
- `rtrim(KColumn kColumn, String characters)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a String which will be supplied to the `RTRIM` function.
- `rtrim(KValTextField kValTextField, String characters)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and a String which will be supplied to the `RTRIM` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    rtrim(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    RTRIM(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    rtrim(val("A short text "))
)
.single();
```

SQL generated:

```sql
SELECT RTRIM(?1)
```

Parameters:

- **?1:** "A short text "

### Example: (KColumn, String)

Java code:

```java
k
.select(
    rtrim(APP_USER.EMAIL, "xyz")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    RTRIM(au.email, ?1)
FROM app_user au
```

Parameters:

- **?1:** "xyz"

### Example: (KValTextField, String)

Java code:

```java
k
.select(
    rtrim(val("A short text"), "xt")
)
.single();
```

SQL generated:

```sql
SELECT RTRIM(?1, ?2)
```

Parameters:

- **?1:** "A short text"
- **?2:** "xt"