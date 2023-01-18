---
title: Ntile
sidebar_label: Ntile
---

## Definition

The `ntile` method allows you to add the `NTILE` function to the query. The `NTILE` function allows you to divide ordered rows in the partition into a specified number of ranked groups as equal size as possible. These ranked groups are called buckets.

The only one method available to use this functionality is:

- `ntile(int buckets)`: Receives buckets value which will be supplied to the `NTILE` function.

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
    ntile(3).over(wd().orderBy(APP_USER.ID))
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    NTILE(3) OVER(ORDER BY au.id)
FROM app_user au
```

Parameters:

- None