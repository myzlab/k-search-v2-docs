---
title: Like Any methods
sidebar_label: Like Any (%LIKE%)
---

## Definition

The Like Any methods allow you to add the **__LIKE__** operator to the query. Additionally, the object or value that is received by parameter will be concatenated with the **_%_** character at the beginning and at the end.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                                           |
|----------------------|-------------------|-----------------------------------------------------------|
| likeAny              | lka               | leftOp LIKE CONCAT('%', rightOp, '%')                     |
| iLikeAny             | ilka              | LOWER(leftOp) LIKE LOWER(CONCAT('%', rightOp, '%'))       |
| notLikeAny           | nlka              | NOT (leftOp LIKE CONCAT('%', rightOp, '%'))               |
| notILikeAny          | nilka             | NOT (LOWER(leftOp) LIKE LOWER(CONCAT('%', rightOp, '%'))) |

:::info

For all cases, the object that calls Like Any methods will be placed as the operand on the left side of the **__LIKE__** operator and the object or value received by parameter will be placed on the right side of the **__LIKE__** operator.

:::

## 1. likeAny | lka

:::tip SQL to generate

```sql
leftOperand LIKE CONCAT('%', rightOperand, '%')
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: lka(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lka(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE CONCAT('%', au.last_name, '%')
```

Parameters:

- None

### Example: lka(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lka("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "%Jhon%"

### Example: lka(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lka(optional(nullValue)))
.and(APP_USER.FIRST_NAME.lka(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "%Jhon%"

## 2. iLikeAny | ilka

:::tip SQL to generate

```sql
LOWER(leftOperand) LIKE LOWER(CONCAT('%', rightOperand, '%'))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: ilka(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilka(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) LIKE LOWER(CONCAT('%', au.last_name, '%'))
```

Parameters:

- None

### Example: ilka(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilka("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) LIKE ?1
```

Parameters:

- **?1:** "%jhon%"

### Example: ilka(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilka(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ilka(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) LIKE ?1
```

Parameters:

- **?1:** "%jhon%"

## 3. notLikeAny | nlka

:::tip SQL to generate

```sql
NOT (leftOperand LIKE CONCAT('%', rightOperand, '%'))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: nlka(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlka(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE CONCAT('%', au.last_name, '%'))
```

Parameters:

- None

### Example: nlka(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlka("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "%Jhon%"

### Example: nlka(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlka(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nlka(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "%Jhon%"

## 4. notILikeAny | nilka

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) LIKE LOWER(CONCAT('%', rightOperand, '%')))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: nilka(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilka(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) LIKE LOWER(CONCAT('%', au.last_name, '%')))
```

Parameters:

- None

### Example: nilka(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilka("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) LIKE ?1)
```

Parameters:

- **?1:** "%jhon%"

### Example: nilka(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilka(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nilka(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) LIKE ?1)
```

Parameters:

- **?1:** "%jhon%"