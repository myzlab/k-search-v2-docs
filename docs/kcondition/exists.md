---
title: Exists methods
sidebar_label: Exists (EXISTS)
---

## Definition

The Exists methods allow you to add the **__EXISTS__** operator to the query.

The methods available are:

| Normal method name |  SQL to generate       |
|--------------------|------------------------|
| exists             |  EXISTS (subquery)     |
| notExists          |  NOT EXISTS (subquery) |

:::info

To use Exists methods, we need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

:::

## 1. exists

:::tip SQL to generate

```sql
EXISTS (subquery)
```
:::

This method takes a single parameter and the possible value is:

`KQuery`.

### Example: exists(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select1()
    .from(APP_USER_SPECIALTY)
    .where(APP_USER.ID.eq(APP_USER_SPECIALTY.APP_USER_ID));

k
.select(APP_USER.ID)
.from(APP_USER)
.where(exists(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE EXISTS (
    SELECT ?
    FROM auth.app_user_specialty aus
    WHERE au.id = aus.app_user_id
)
```

Parameters:

- **?1:** 1

## 2. notExists

:::tip SQL to generate

```sql
NOT EXISTS (subquery)
```
:::

This method takes a single parameter and the possible value is:

`KQuery`.

### Example: notExists(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select1()
    .from(APP_USER_SPECIALTY)
    .where(APP_USER.ID.eq(APP_USER_SPECIALTY.APP_USER_ID));

k
.select(APP_USER.ID)
.from(APP_USER)
.where(notExists(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT EXISTS (
    SELECT ?
    FROM auth.app_user_specialty aus
    WHERE au.id = aus.app_user_id
)
```

Parameters:

- **?1:** 1