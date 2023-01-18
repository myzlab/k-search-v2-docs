---
title: Dense Rank
sidebar_label: Dense Rank
---

## Definition

The `denseRank` method allows you to add the `DENSE_RANK` function to the query. The `DENSE_RANK` function assigns a rank to every row in each partition of a result set.

The only one method available to use this functionality is:

- `denseRank()`: It does not receive any parameters.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    denseRank().over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    DENSE_RANK() OVER()
FROM app_user au
```

Parameters:

- None