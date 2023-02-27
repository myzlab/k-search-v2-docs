---
title: Format
sidebar_label: Format
---

## Definition

The `format` method allows you to add the `FORMAT` function to the query. The `FORMAT` function returns a formatted string according to the specified format string and arguments.

The only one method available to use this functionality is:

- `format(String formatString, KColumn... kColumns)`: Receives a String and a variable quantity of [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) or [`KColumn`](/docs/misc/select-list-values#2-kcolumn) which will be supplied to the `FORMAT` function.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    format("Hello %s, %1$s", APP_USER.FIRST_NAME)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    FORMAT('Hello %s, %1$s', au.first_name)
FROM app_user au
```

Parameters:

- **?1:** None