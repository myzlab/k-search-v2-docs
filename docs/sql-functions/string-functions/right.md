---
title: Right
sidebar_label: Right
---

## Definition

The `right` method allows you to add the `RIGHT` function to the query. The `RIGHT` function return last *n* characters in the string. When *n* is negative, return all but first |n| characters.

## Available methods

- `right(KColumn kColumn, int n)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an int which will be supplied to the `RIGHT` function.
- `right(KValTextField kValTextField, int n)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and an int which will be supplied to the `RIGHT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, int)

Java code:

```java
k
.select(
    right(APP_USER.FIRST_NAME, 2)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    RIGHT(au.first_name, 2)
FROM app_user au
```

Parameters:

- None

## Example: (KValTextField, int)

Java code:

```java
k
.select(
    right(val("A text"), 2)
)
.single();
```

SQL generated:

```sql
SELECT RIGHT(?1, 2)
```

Parameters:

- **?1:** "A text"