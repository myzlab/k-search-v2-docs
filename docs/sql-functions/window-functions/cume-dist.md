---
title: Cume Dist
sidebar_label: Cume Dist
---

## Definition

The `cumeDist` method allows you to add the `CUME_DIST` function to the query. The `CUME_DIST` function returns the cumulative distribution of a value within a set of values. In other words, it returns the relative position of a value in a set of values.

## Available methods

- `cumeDist()`: It does not receive any parameters.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    cumeDist().over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    CUME_DIST() OVER()
FROM app_user au
```

Parameters:

- None