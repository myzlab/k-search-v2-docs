---
title: True methods
sidebar_label: True (IS TRUE)
---

## Definition

The True methods allow you to add the **__IS TRUE__** operator to the query.

The methods available are:

| Normal method name |  SQL to generate    |
|--------------------|---------------------|
| isTrue             |  leftOp IS TRUE     |
| isNotTrue          |  leftOp IS NOT TRUE |

:::info

For all cases, the object that calls True methods will be placed as the operand on the left side of the **__IS TRUE__** operator.

:::

## 1. isTrue

:::tip SQL to generate

```sql
leftOperand IS TRUE
```
:::

This method takes no parameters.

### Example: isTrue()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ACTIVE.isTrue())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.active IS TRUE
```

Parameters:

- None

## 1. isNotTrue

:::tip SQL to generate

```sql
leftOperand IS NOT TRUE
```
:::

This method takes no parameters.

### Example: isNotTrue()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ACTIVE.isNotTrue())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.active IS NOT TRUE
```

Parameters:

- None