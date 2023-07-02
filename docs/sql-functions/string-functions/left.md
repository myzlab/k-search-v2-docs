---
title: Left
sidebar_label: Left
---

## Definition

The `left` method allows you to add the `LEFT` function to the query. The `LEFT` function return first *n* characters in the string. When *n* is negative, return all but last |n| characters.

## Available methods

- `left(KColumn kColumn, int n)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an int which will be supplied to the `LEFT` function.
- `left(KValTextField kValTextField, int n)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and an int which will be supplied to the `LEFT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, int)

Java code:

```java
k
.select(
    left(APP_USER.FIRST_NAME, 2)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    LEFT(au.first_name, 2)
FROM app_user au
```

Parameters:

- None

## Example: (KValTextField, int)

Java code:

```java
k
.select(
    left(val("A text"), 3)
)
.single();
```

SQL generated:

```sql
SELECT LEFT(?1, 3)
```

Parameters:

- **?1:** "A text"