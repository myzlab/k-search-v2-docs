---
title: Percent Rank
sidebar_label: Percent Rank
---

## Definition

The `percentRank` method allows you to add the `PERCENT_RANK` function to the query. The `PERCENT_RANK` function evaluates the relative standing of a value within a set of values.

## Available methods

- `percentRank()`: It does not receive any parameters.

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
    percentRank().over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    PERCENT_RANK() OVER()
FROM app_user au
```

Parameters:

- None