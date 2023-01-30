---
title: Null methods
sidebar_label: Null (IS NULL)
---

## Definition

The Null methods allow you to add the **__IS NULL__** operator to the query.

The methods available are:

| Normal method name |  SQL to generate    |
|--------------------|---------------------|
| isNull             |  leftOp IS NULL     |
| isNotNull          |  leftOp IS NOT NULL |

:::info

For all cases, the object that calls Null methods will be placed as the operand on the left side of the **__IS NULL__** operator.

:::

## 1. isNull

:::tip SQL to generate

```sql
leftOperand IS NULL
```
:::

This method takes no parameters.

### Example: isNull()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.isNull())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email IS NULL
```

Parameters:

- None

## 1. isNotNull

:::tip SQL to generate

```sql
leftOperand IS NOT NULL
```
:::

This method takes no parameters.

### Example: isNotNull()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.isNotNull())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email IS NOT NULL
```

Parameters:

- None