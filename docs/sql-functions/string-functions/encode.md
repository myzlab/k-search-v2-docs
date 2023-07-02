---
title: Encode
sidebar_label: Encode
---

## Definition

The `encode` method allows you to add the `ENCODE` function to the query. The `ENCODE` function encode binary data into a textual representation.

## Available methods

- `encode(KColumn kColumn, KFormat kFormat)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and a [`KFormat`](/docs/misc/kformat) which will be supplied to the `ENCODE` function.
- `encode(KValTextField kValTextField, KFormat kFormat)`: Receives a [`KValTextField`](/docs/misc/select-list-values#3-values) and a [`KFormat`](/docs/misc/kformat) which will be supplied to the `ENCODE` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example: (KColumn, KFormat)

Java code:

```java
k
.select(
    encode(APP_USER.FIRST_NAME.cast(bytea()), escape())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    ENCODE(CAST(au.first_name AS BYTEA), 'ESCAPE')
FROM app_user au
```

Parameters:

- None

## Example: (KValTextField, KFormat)

Java code:

```java
k
.select(
    encode(val("123\\000456").cast(bytea()), escape())
)
.single();
```

SQL generated:

```sql
SELECT ENCODE(CAST(?1 AS BYTEA), 'ESCAPE')
```

Parameters:

- **?1:** "123\000456"