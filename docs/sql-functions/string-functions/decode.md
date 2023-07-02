---
title: Decode
sidebar_label: Decode
---

## Definition

The `decode` method allows you to add the `DECODE` function to the query. The `DECODE` function decode binary data from textual representation in string.

## Available methods

- `decode(KColumn kColumn, KFormat kFormat)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a [`KFormat`](/docs/misc/kformat) which will be supplied to the `DECODE` function.
- `decode(KValTextField kValTextField, KFormat kFormat)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and a [`KFormat`](/docs/misc/kformat) which will be supplied to the `DECODE` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KFormat)

Java code:

```java
k
.select(
    decode(APP_USER.FIRST_NAME, escape())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    DECODE(au.first_name, 'ESCAPE')
FROM app_user au
```

Parameters:

- None

## Example: (KValTextField, KFormat)

Java code:

```java
k
.select(
    decode(val("MTIzAAE="), base64())
)
.single();
```

SQL generated:

```sql
SELECT DECODE(?1, 'BASE64')
```

Parameters:

- **?1:** "MTIzAAE="