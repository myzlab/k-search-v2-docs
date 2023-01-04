---
title: Like End With methods
sidebar_label: Like End With (LIKE)
---

## Definition

The Like End With methods allow you to add the **__LIKE__** operator to the query. Additionally, the object or value that is received by parameter will be concatenated with the **_%_** character at the beginning.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                                       |
|----------------------|-------------------|-------------------------------------------------------|
| likeEndWith          | lkew               | leftOp LIKE CONCAT('%', rightOp)                     |
| iLikeEndWith         | ilkew              | LOWER(leftOp) LIKE LOWER(CONCAT('%', rightOp))       |
| notLikeEndWith       | nlkew              | NOT (leftOp LIKE CONCAT('%', rightOp))               |
| notILikeEndWith      | nilkew             | NOT (LOWER(leftOp) LIKE LOWER(CONCAT('%', rightOp))) |

:::info

For all cases, the object that calls Like Any methods will be placed as the operand on the left side of the **__LIKE__** operator and the object or value received by parameter will be placed on the right side of the **__LIKE__** operator.

:::

## 1. likeEndWith | lkew

:::tip SQL to generate

```sql
leftOperand LIKE CONCAT('%', rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: lkew(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lkew(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE CONCAT('%', au.last_name)
```

Parameters:

- None

### Example: lkew(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lkew("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "%Jhon"

### Example: lkew(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lkew(optional(nullValue)))
.and(APP_USER.FIRST_NAME.lkew(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name LIKE ?1
```

Parameters:

- **?1:** "%Jhon"

## 2. iLikeEndWith | ilkew

:::tip SQL to generate

```sql
LOWER(leftOperand) LIKE LOWER(CONCAT('%', rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

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
WHERE LOWER(au.first_name) LIKE LOWER(CONCAT('%', au.last_name))
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
WHERE LOWER(au.first_name) LIKE ?1
```

Parameters:

- **?1:** "%jhon"

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
WHERE LOWER(au.first_name) LIKE ?1
```

Parameters:

- **?1:** "%jhon"

## 3. notLikeEndWith | nlkew

:::tip SQL to generate

```sql
NOT (leftOperand LIKE CONCAT('%', rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: nlkew(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlkew(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE CONCAT('%', au.last_name))
```

Parameters:

- None

### Example: nlkew(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlkew("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "%Jhon"

### Example: nlkew(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlkew(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nlkew(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name LIKE ?1)
```

Parameters:

- **?1:** "%Jhon"

## 4. notILikeEndWith | nilkew

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) LIKE LOWER(CONCAT('%', rightOperand)))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

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
WHERE NOT (LOWER(au.first_name) LIKE LOWER(CONCAT('%', au.last_name)))
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
WHERE NOT (LOWER(au.first_name) LIKE ?1)
```

Parameters:

- **?1:** "%jhon"

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
WHERE NOT (LOWER(au.first_name) LIKE ?1)
```

Parameters:

- **?1:** "%jhon"