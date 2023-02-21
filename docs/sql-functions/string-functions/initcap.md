---
title: Initcap
sidebar_label: Initcap
---

## Definition

The `initcap` method allows you to add the `INITCAP` function to the query. The `INITCAP` function is used to convert the first letter of each word to upper case and the remaining to lower case.

There are 2 ways to call this method:

## 1. Calling from a `KColumn` or a `KTableColumn`

The only one method available to use this functionality calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) is:

- `initcap()`: It does not receive any parameters. The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `INITCAP` function.

### Example

Java code:

```java
k
.select(
    APP_USER.EMAIL.initcap()
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    INITCAP(au.email)
FROM app_user au
```

Parameters:

- None

## 2. Calling from the `KFunction` class

The only one method available to use this functionality calling from the `KFunction` class is:

- `initcap(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `INITCAP` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    initcap(APP_USER.EMAIL)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    INITCAP(au.email)
FROM app_user au
```

Parameters:

- None