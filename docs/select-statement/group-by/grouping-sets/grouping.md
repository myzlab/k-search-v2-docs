---
title: Grouping
sidebar_label: Grouping
---

## Definition

The `grouping` method allows you to add the `GROUPING` function to the query.

The `GROUPING` function returns 0 if the argument is a member of the current grouping set and 1 otherwise.

:::tip

The use of this method is recommended in statements that involve the [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/), [`CUBE`](/docs/select-statement/group-by/grouping-sets/cube), or [`ROLLUP`](/docs/select-statement/group-by/grouping-sets/rollup) subclauses.

:::

There are 2 ways to call this method:

## Available methods calling from a [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn)

### 1. `grouping()`

It does not receive any parameters.

:::info

The [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the one supplied to the `GROUPING` function.

:::

### Example

Java code:

```java
k
.select(
    count(),
    APP_USER.ROLE_ID.grouping()
)
.from(APP_USER)
.groupBy(APP_USER.ROLE_ID)
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*),
    GROUPING(au.role_id)
FROM app_user au
GROUP BY au.role_id
```

Parameters:

- None

## Available methods calling from the `KFunction` class

## 1. `grouping(KColumn kColumn)`

- **kColumns:** is the expresion that will be supplied to the `GROUPING` function.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn).

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(
    count(),
    grouping(APP_USER.ROLE_ID)
)
.from(APP_USER)
.groupBy(APP_USER.ROLE_ID)
.multiple();
```

SQL generated:

```sql
SELECT
    COUNT(*),
    GROUPING(au.role_id)
FROM app_user au
GROUP BY au.role_id
```

Parameters:

- None