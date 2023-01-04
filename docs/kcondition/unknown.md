---
title: Unknown methods
sidebar_label: Unknown (IS UNKNOWN)
---

## Definition

The Unknown methods allow you to add the **__IS UNKNOWN__** operator to the query.

The methods available are:

| Normal method name |  SQL to generate    |
|--------------------|---------------------|
| isUnknown             |  leftOp IS UNKNOWN     |
| isNotUnknown          |  leftOp IS NOT UNKNOWN |

:::info

For all cases, the object that calls Unknown methods will be placed as the operand on the left side of the **__IS UNKNOWN__** operator.

:::

## 1. isUnknown

:::tip SQL to generate

```sql
leftOperand IS UNKNOWN
```
:::

This method takes no parameters.

### Example: isUnknown()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ACTIVE.isUnknown())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.active IS UNKNOWN
```

Parameters:

- None

## 1. isNotUnknown

:::tip SQL to generate

```sql
leftOperand IS NOT UNKNOWN
```
:::

This method takes no parameters.

### Example: isNotUnknown()

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ACTIVE.isNotUnknown())
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.active IS NOT UNKNOWN
```

Parameters:

- None