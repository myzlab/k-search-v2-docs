---
title: False methods
sidebar_label: False (IS FALSE)
---

## Definition

The False methods allow you to add the **__IS FALSE__** operator to the query.

The methods available are:

| Normal method name |  SQL to generate    |
|--------------------|---------------------|
| isFalse             |  leftOp IS FALSE     |
| isNotFalse          |  leftOp IS NOT FALSE |

:::info

For all cases, the object that calls False methods will be placed as the operand on the left side of the **__IS FALSE__** operator.

:::

## 1. isFalse

:::tip SQL to generate

```sql
leftOperand IS FALSE
```
:::

This method takes no parameters.

### Example: isFalse()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ACTIVE.isFalse())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.active IS FALSE
```

Parameters:

- None

## 1. isNotFalse

:::tip SQL to generate

```sql
leftOperand IS NOT FALSE
```
:::

This method takes no parameters.

### Example: isNotFalse()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ACTIVE.isNotFalse())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.active IS NOT FALSE
```

Parameters:

- None