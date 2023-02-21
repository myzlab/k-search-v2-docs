---
title: Ascii
sidebar_label: Ascii
---

## Definition

The `ascii` method allows you to add the `ASCII` function to the query. The `ASCII` function is used to get the code of the first character of a given string.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `ascii()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `ASCII` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.ascii()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    ASCII(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `ascii(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ASCII` function.
- `ascii(KValTextField kValTextField)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) which will be supplied to the `ASCII` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    ascii(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    ASCII(au.email)
FROM app_user au
```

Parameters:

- None

### Example: (KValTextField)

Java code:

```java
k
.select(
    ascii(val("An example"))
)
.single();
```

SQL generated:

```sql
SELECT ASCII(?1)
```

Parameters:

- **?1:** "An example"