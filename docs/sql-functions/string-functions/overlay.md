---
title: Overlay
sidebar_label: Overlay
---

## Definition

The `overlay` method allows you to add the `OVERLAY` function to the query. The `OVERLAY` function is used to replace the specified number of characters starting at the specified position with the specified text in a string.

The methods available to use this functionality are:

- `overlay(KColumn kColumn, String value, int from)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), a String and an int which will be supplied to the `OVERLAY` function.
- `overlay(KColumn kColumn, String value, int from, Integer for_)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), a String, an int and an Integer which will be supplied to the `OVERLAY` function.
- `overlay(KValTextField kValTextField, String value, int from)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values), a String and an int which will be supplied to the `OVERLAY` function.
- `overlay(KValTextField kValTextField, String value, int from, Integer for_)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values), a String, an int and an Integer which will be supplied to the `OVERLAY` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, String, int)

Java code:

```java
k
.select(
    overlay(APP_USER.EMAIL, "hom", 1)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT 
    OVERLAY(au.email PLACING ?1 from 1)
FROM app_user au
```

Parameters:

- **?1:** "hom"

## Example: (KColumn, String, int, Integer)

Java code:

```java
k
.select(
    overlay(APP_USER.EMAIL, "hom", 2, 3)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT 
    OVERLAY(au.email PLACING ?1 from 2 for 3)
FROM app_user au
```

Parameters:

- **?1:** "hom"

## Example: (KValTextField, String, int)

Java code:

```java
k
.select(
    overlay(val("A short text"), "sh", 6)
)
.single();
```

SQL generated:

```sql
SELECT OVERLAY(?1 PLACING ?2 from 6)
```

Parameters:

- **?1:** "A short text"
- **?2:** "sh"

## Example: (KValTextField, String, int, Integer)

Java code:

```java
k
.select(
    overlay(val("A short text"), "sh", 6, 9)
)
.single();
```

SQL generated:

```sql
SELECT OVERLAY(?1 PLACING ?2 from 6 for 9)
```

Parameters:

- **?1:** "A short text"
- **?2:** "sh"