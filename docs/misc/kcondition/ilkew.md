---
title: ILike End With methods
sidebar_label: ILike End With (%LIKE)
---

## Definition

The iLike End With methods allow you to add the **__ILIKE__** operator to the query. Additionally, the object or value that is received by parameter will be concatenated with the **_%_** character at the beginning.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                                       |
|----------------------|-------------------|-------------------------------------------------------|
| iLikeEndWith         | ilkew              | leftOp ILIKE CONCAT('%', rightOp)       |
| notILikeEndWith      | nilkew             | NOT (leftOp ILIKE CONCAT('%', rightOp)) |

:::info

For all cases, the object that calls Like Any methods will be placed as the operand on the left side of the **__ILIKE__** operator and the object or value received by parameter will be placed on the right side of the **__ILIKE__** operator.

:::

## 1. iLikeEndWith | ilkew

:::tip SQL to generate

```sql
leftOperand ILIKE CONCAT('%', rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: ilkew(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilkew(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE CONCAT('%', au.last_name)
```

Parameters:

- None

### Example: ilkew(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilkew("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE ?1
```

Parameters:

- **?1:** "%Jhon"

### Example: ilkew(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilkew(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ilkew(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE ?1
```

Parameters:

- **?1:** "%Jhon"

## 2. notILikeEndWith | nilkew

:::tip SQL to generate

```sql
NOT (leftOperand ILIKE CONCAT('%', rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nilkew(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilkew(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE CONCAT('%', au.last_name))
```

Parameters:

- None

### Example: nilkew(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilkew("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE ?1)
```

Parameters:

- **?1:** "%Jhon"

### Example: nilkew(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilkew(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nilkew(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE ?1)
```

Parameters:

- **?1:** "%Jhon"