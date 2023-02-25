---
title: Substring
sidebar_label: Substring
---

## Definition

The `substring` method allows you to add the `SUBSTRING` function to the query. The `SUBSTRING` function  extracts a substring from a specified string according to a specified starting position and length, or extract a substring according to regular expressions.

The methods available to use this functionality are:

- `substring(KColumn kColumn, int from)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an int which will be supplied to the `SUBSTRING` function.
- `substring(KColumn kColumn, Integer from, Integer for_)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and two Integer which will be supplied to the `SUBSTRING` function.
- `substring(KValTextField kValTextField, int from)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and an int which will be supplied to the `SUBSTRING` function.
- `substring(KValTextField kValTextField, Integer from, Integer for_)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and two Integer which will be supplied to the `SUBSTRING` function.
- `substring(KColumn kColumn, String from)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a String which will be supplied to the `SUBSTRING` function.
- `substring(KColumn kColumn, String from, String for_)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and two String which will be supplied to the `SUBSTRING` function.
- `substring(KValTextField kValTextField, String from)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and a String which will be supplied to the `SUBSTRING` function.
- `substring(KValTextField kValTextField, String from, String for_)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and two String which will be supplied to the `SUBSTRING` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, int)

Java code:

```java
k
.select(
    substring(APP_USER.EMAIL, 1)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    SUBSTRING(au.email from 1)
FROM app_user au
```

Parameters:

- None

## Example: (KColumn, Integer, Integer)

Java code:

```java
k
.select(   
    substring(APP_USER.EMAIL, 2, 3)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    SUBSTRING(au.email from 2 for 3)
FROM app_user au
```

Parameters:

- None

## Example: (KColumn, Integer, Integer)

Java code:

```java
k
.select(
    substring(APP_USER.EMAIL, null, 7)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    SUBSTRING(au.email for 7)
FROM app_user au
```

Parameters:

- None

## Example: (KValTextField, int)

Java code:

```java
k
.select(
    substring(val("A text to substring"), 4)
)
.single();
```

SQL generated:

```sql
SELECT SUBSTRING(?1 from 4)
```

Parameters:

- **?1:** "A text to substring"

## Example: (KValTextField, Integer, Integer)

Java code:

```java
k
.select(
    substring(val("A text to substring"), 2, 8)
)
.single();
```

SQL generated:

```sql
SELECT SUBSTRING(?1 from 2 for 8)
```

Parameters:

- **?1:** "A text to substring"

## Example: (KValTextField, Integer, Integer)

Java code:

```java
k
.select(
    substring(val("A text to substring"), null, 8)
)
.single();
```

SQL generated:

```sql
SELECT SUBSTRING(?1 for 8)
```

Parameters:

- **?1:** "A text to substring"

## Example: (KColumn, String)

Java code:

```java
k
.select(
    substring(APP_USER.EMAIL, "...$")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    SUBSTRING(au.email from '...$')
FROM app_user au
```

Parameters:

- None

## Example: (KColumn, String, String)

Java code:

```java
k
.select(
    substring(APP_USER.EMAIL, "%#\"o_a#\"_", "#")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    SUBSTRING(au.email from '%#"o_a#"_' for '#')
FROM app_user au
```

Parameters:

- None

## Example: (KValTextField, String)

Java code:

```java
k
.select(
    substring(val("Thomas"), "...$")
)
.single();
```

SQL generated:

```sql
SELECT SUBSTRING(?1 from '...$')
```

Parameters:

- **?1:** "Thomas"

## Example: (KValTextField, String, String)

Java code:

```java
k
.select(
    substring(val("Thomas"), "%#\"o_a#\"_", "#")
)
.single();
```

SQL generated:

```sql
SELECT SUBSTRING(?1 from '%#"o_a#"_' for '#')
```

Parameters:

- **?1:** "Thomas"