---
title: To Hex
sidebar_label: To Hex
---

## Definition

The `toHex` method allows you to add the `TO_HEX` function to the query. The `TO_HEX` function is used to convert a number to its equivalent hexadecimal representation.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `toHex()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `TO_HEX` function.

### Example

Java code:

```java
k
.select(
    APP_USER.ID.toHex()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TO_HEX(au.id)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The methods available to use this functionality calling from the `KFunction` class are:

- `toHex(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `TO_HEX` function.
- `toHex(KValNumberField kValNumberField)`: Receives a [`KValNumberField`](/docs/misc/select-list-values#3-values) which will be supplied to the `TO_HEX` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KColumn)

Java code:

```java
k
.select(
    toHex(APP_USER.ID)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TO_HEX(au.id)
FROM app_user au
```

Parameters:

- None

### Example: (KValNumberField)

Java code:

```java
k
.select(
    toHex(val(12))
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    TO_HEX(?1)
FROM app_user au
```

Parameters:

- **?1:** 12