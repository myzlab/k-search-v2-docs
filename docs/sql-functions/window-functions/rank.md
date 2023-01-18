---
title: Rank
sidebar_label: Rank
---

## Definition

The `rank` method allows you to add the `RANK` function to the query. The `RANK` function assigns a rank to every row within a partition of a result set.

The only one method available to use this functionality is:

- `rank()`: It does not receive any parameters.

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
    rank().over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    RANK() OVER()
FROM app_user au
```

Parameters:

- None