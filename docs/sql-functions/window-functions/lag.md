---
title: Lag
sidebar_label: Lag
---

## Definition

The `lag` method allows you to add the `LAG` function to the query. The `LAG` function provides access to a row that comes before the current row at a specified physical offset. In other words, from the current row the `LAG` function can access data of the previous row, or the row before the previous row, and so on.

The methods available to use this functionality are:

- `lag(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) which will be supplied to the `LAG` function.
- `lag(KColumn kColumn, int offset)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) and an offset which will be supplied to the `LAG` function.
- `lag(KColumn kColumn, int offset, KBaseColumnCastable defaultValue)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) or a [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) and an offset which will be supplied to the `LAG` function. Additionally, receives a default value which too will be supplied to the `LAG` function. Among the possible values of this default value are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/select/introduction#3-values).

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: lag(KColumn)

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lag(APP_USER.FIRST_NAME).over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    LAG(au.first_name) OVER()
FROM app_user au
```

Parameters:

- None

### Example: lag(KColumn, int)

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lag(APP_USER.FIRST_NAME, 2).over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    LAG(au.first_name, 2) OVER()
FROM app_user au
```

Parameters:

- None

### Example: lag(KColumn, int, KBaseColumnCastable)

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lag(APP_USER.FIRST_NAME, 2, val("No name")).over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    LAG(au.first_name, 2, ?1) OVER()
FROM app_user au
```

Parameters:

- **?1:** "No name"