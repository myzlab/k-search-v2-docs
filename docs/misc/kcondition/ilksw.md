---
title: ILike Start With methods
sidebar_label: ILike Start With (LIKE%)
---

## Definition

The iLike Start With methods allow you to add the **__ILIKE__** operator to the query. Additionally, the object or value that is received by parameter will be concatenated with the **_%_** character at the end.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                                       |
|----------------------|-------------------|-------------------------------------------------------|
| iLikeStartWith       | ilksw              | leftOp ILIKE CONCAT(rightOp, '%')       |
| notILikeStartWith    | nilksw             | NOT (leftOp ILIKE CONCAT(rightOp, '%')) |

:::info

For all cases, the object that calls Like Any methods will be placed as the operand on the left side of the **__ILIKE__** operator and the object or value received by parameter will be placed on the right side of the **__ILIKE__** operator.

:::

## 1. iLikeStartWith | ilksw

:::tip SQL to generate

```sql
leftOperand LIKE CONCAT(rightOperand, '%')
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: ilksw(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilksw(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE CONCAT(au.last_name, '%')
```

Parameters:

- None

### Example: ilksw(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilksw("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE ?1
```

Parameters:

- **?1:** "Jhon%"

### Example: ilksw(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilksw(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ilksw(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE ?1
```

Parameters:

- **?1:** "Jhon%"

## 2. notILikeStartWith | nilksw

:::tip SQL to generate

```sql
NOT (leftOperand LIKE CONCAT(rightOperand, '%'))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nilksw(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilksw(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE CONCAT(au.last_name, '%'))
```

Parameters:

- None

### Example: nilksw(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilksw("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE ?1)
```

Parameters:

- **?1:** "Jhon%"

### Example: nilksw(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilksw(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nilksw(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE ?1)
```

Parameters:

- **?1:** "Jhon%"