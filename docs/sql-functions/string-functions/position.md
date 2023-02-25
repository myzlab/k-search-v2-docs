---
title: Position
sidebar_label: Position
---

## Definition

The `position` method allows you to add the `POSITION` function to the query. The `POSITION` function returns the starting index of a specified substring within a specified string.

The methods available to use this functionality are:

- `position(KColumn kColumn, String valueToLocate)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a String which will be supplied to the `POSITION` function.
- `position(KValTextField kValTextField, String valueToLocate)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and an String which will be supplied to the `POSITION` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, String)

Java code:

```java
k
.select(
    position(APP_USER.EMAIL, "om")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    POSITION(?1 in au.email)
FROM app_user au
```

Parameters:

- **?1:** "om"

## Example: (KValTextField, String)

Java code:

```java
k
.select(
    position(val("A previous example"), "ex")
)
.single()
```

SQL generated:

```sql
SELECT POSITION(?1 in ?2)
```

Parameters:

- **?1:** "ex"
- **?2:** "A previous example"