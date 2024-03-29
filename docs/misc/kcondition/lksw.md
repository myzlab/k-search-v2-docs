---
title: Like Start With methods
sidebar_label: Like Start With (Value%)
---

## Definition

The Like Start With methods allow you to add the **__LIKE__** operator to the query. Additionally, the object or value that is received by parameter will be concatenated with the **_%_** character at the end.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                                       |
|----------------------|-------------------|-------------------------------------------------------|
| likeStartWith        | lksw               | leftOp LIKE CONCAT(rightOp, '%')                     |
| notLikeStartWith     | nlksw              | NOT (leftOp LIKE CONCAT(rightOp, '%'))               |

:::info

For all cases, the object that calls Like Any methods will be placed as the operand on the left side of the **__LIKE__** operator and the object or value received by parameter will be placed on the right side of the **__LIKE__** operator.

:::

## 1. likeStartWith | lksw

:::tip SQL to generate

```sql
leftOperand LIKE CONCAT(rightOperand, '%')
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: lksw(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lksw(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE CONCAT(au.last_name, '%')
```

Parameters:

- None

### Example: lksw(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lksw("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "Jhon%"

### Example: lksw(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lksw(optional(nullValue)))
.and(APP_USER.FIRST_NAME.lksw(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "Jhon%"

## 2. notLikeStartWith | nlksw

:::tip SQL to generate

```sql
NOT (leftOperand LIKE CONCAT(rightOperand, '%'))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nlksw(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlksw(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE CONCAT(au.last_name, '%'))
```

Parameters:

- None

### Example: nlksw(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlksw("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "Jhon%"

### Example: nlksw(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlksw(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nlksw(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "Jhon%"