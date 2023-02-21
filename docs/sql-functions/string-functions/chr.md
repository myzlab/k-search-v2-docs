---
title: Chr
sidebar_label: Chr
---

## Definition

The `chr` method allows you to add the `CHR` function to the query. The `CHR` function is used to return the corresponding character against the given code within the argument.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `chr()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `CHR` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.ascii().chr()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CHR(ASCII(au.email))
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `chr(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `CHR` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    chr(ascii(APP_USER.EMAIL))
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CHR(ASCII(au.email))
FROM app_user au
```

Parameters:

- None