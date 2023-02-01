---
title: Row Number
sidebar_label: Row Number
---

## Definition

The `rowNumber` method allows you to add the `ROW_NUMBER` function to the query. The `ROW_NUMBER` function assigns a sequential integer to each row in a result set.

The only one method available to use this functionality is:

- `rowNumber()`: It does not receive any parameters.

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
    rowNumber().over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    ROW_NUMBER() OVER()
FROM app_user au
```

Parameters:

- None