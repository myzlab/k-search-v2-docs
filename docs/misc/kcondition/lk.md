---
title: Like methods
sidebar_label: Like (LIKE)
---

## Definition

The Like methods allow you to add the **__LIKE__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                         |
|----------------------|-------------------|-----------------------------------------|
| like                 | lk                | leftOp LIKE rightOp                     |
| notLike              | nlk               | NOT (leftOp LIKE rightOp)               |

:::info

For all cases, the object that calls Like methods will be placed as the operand on the left side of the **__LIKE__** operator and the object or value received by parameter will be placed on the right side of the **__LIKE__** operator.

:::

## 1. like | lk

:::tip SQL to generate

```sql
leftOperand LIKE rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: lk(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lk(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE au.last_name
```

Parameters:

- None

### Example: lk(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lk("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "Jhon"

### Example: lk(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lk(optional(nullValue)))
.and(APP_USER.FIRST_NAME.lk(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "Jhon"

## 2. notLike | nlk

:::tip SQL to generate

```sql
NOT (leftOperand LIKE rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nlk(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlk(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE au.last_name)
```

Parameters:

- None

### Example: nlk(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlk("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: nlk(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlk(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nlk(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "Jhon"