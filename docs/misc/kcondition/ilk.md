---
title: ILike methods
sidebar_label: ILike (LIKE)
---

## Definition

The iLike methods allow you to add the **__ILIKE__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                         |
|----------------------|-------------------|-----------------------------------------|
| iLike                | ilk               | leftOp ILIKE rightOp       |
| notILike             | nilk              | NOT (leftOp ILIKE rightOp) |

:::info

For all cases, the object that calls Like methods will be placed as the operand on the left side of the **__ILIKE__** operator and the object or value received by parameter will be placed on the right side of the **__ILIKE__** operator.

:::

## 1. iLike | ilk

:::tip SQL to generate

```sql
leftOperand ILIKE rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: ilk(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilk(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE au.last_name
```

Parameters:

- None

### Example: ilk(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilk("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE ?1
```

Parameters:

- **?1:** "Jhon"

### Example: ilk(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilk(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ilk(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name ILIKE ?1
```

Parameters:

- **?1:** "Jhon"

## 2. notILike | nilk

:::tip SQL to generate

```sql
NOT (leftOperand ILIKE rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nilk(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilk(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE au.last_name)
```

Parameters:

- None

### Example: nilk(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilk("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: nilk(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilk(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nilk(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name ILIKE ?1)
```

Parameters:

- **?1:** "Jhon"