---
title: Lead
sidebar_label: Lead
---

## Definition

The `lead` method allows you to add the `LEAD` function to the query. The `LEAD` function provides access to a row that follows the current row at a specified physical offset. It means that from the current row, the `LEAD` function can access data of the next row, the row after the next row, and so on.

The methods available to use this functionality are:

- `lead(KColumn kColumn)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `LEAD` function.
- `lead(KColumn kColumn, int offset)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an offset which will be supplied to the `LEAD` function.
- `lead(KColumn kColumn, int offset, KBaseColumnCastable defaultValue)`: Receives a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) and an offset which will be supplied to the `LEAD` function. Additionally, receives a default value which too will be supplied to the `LEAD` function. Among the possible values of this default value are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values).

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: lead(KColumn)

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lead(APP_USER.FIRST_NAME).over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    LEAD(au.first_name) OVER()
FROM app_user au
```

Parameters:

- None

### Example: lead(KColumn, int)

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lead(APP_USER.FIRST_NAME, 2).over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    LEAD(au.first_name, 2) OVER()
FROM app_user au
```

Parameters:

- None

### Example: lead(KColumn, int, KBaseColumnCastable)

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    lead(APP_USER.FIRST_NAME, 2, val("No name")).over(wd())
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.first_name,
    LEAD(au.first_name, 2, ?1) OVER()
FROM app_user au
```

Parameters:

- **?1:** "No name"