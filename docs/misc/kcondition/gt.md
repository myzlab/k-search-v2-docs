---
title: Greater Than methods
sidebar_label: Greater Than (>)
---

## Definition

The Greater Than methods allow you to add the **__>__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                      |
|----------------------|-------------------|--------------------------------------|
| greaterThan          | gt                | leftOp > rightOp                     |
| iGreaterThan         | igt               | LOWER(leftOp) > LOWER(rightOp)       |
| notGreaterThan       | ngt               | NOT (leftOp > rightOp)               |
| notIGreaterThan      | nigt              | NOT (LOWER(leftOp) > LOWER(rightOp)) |

:::info

For all cases, the object that calls Greater Than methods will be placed as the operand on the left side of the **__>__** operator and the object or value received by parameter will be placed on the right side of the **__>__** operator.

:::

## 1. greaterThan | gt

:::tip SQL to generate

```sql
leftOperand > rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/select-statement/select/introduction#3-values), [`KValTextField`](/docs/select-statement/select/introduction#3-values), `KQuery`, [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: gt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.gt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name > au.last_name
```

Parameters:

- None

### Example: gt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.gt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name > ?1
```

Parameters:

- **?1:** "Jhon"

### Example: gt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.gt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.gt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name > ?1
```

Parameters:

- **?1:** "Jhon"

### Example: gt(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.gt(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id > (
    SELECT MAX(aus.app_user_id)
    FROM app_user_specialty aus
)
```

Parameters:

- None

## 2. iGreaterThan | igt

:::tip SQL to generate

```sql
LOWER(leftOperand) > LOWER(rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: igt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.igt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) > LOWER(au.last_name)
```

Parameters:

- None

### Example: igt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.igt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) > ?1
```

Parameters:

- **?1:** "jhon"

### Example: igt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.igt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.igt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) > ?1
```

Parameters:

- **?1:** "jhon"

## 3. notGreaterThan | ngt

:::tip SQL to generate

```sql
NOT (leftOperand > rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/select-statement/select/introduction#3-values), [`KValTextField`](/docs/select-statement/select/introduction#3-values), `KQuery`, [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: ngt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ngt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name > au.last_name)
```

Parameters:

- None

### Example: ngt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ngt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name > ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: ngt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ngt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ngt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name > ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: ngt(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.ngt(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (
    au.id > (
        SELECT MAX(aus.app_user_id)
        FROM app_user_specialty aus
    )
)
```

Parameters:

- None

## 4. notIGreaterThan | nigt

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) > LOWER(rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: nigt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nigt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) > LOWER(au.last_name))
```

Parameters:

- None

### Example: nigt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nigt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) > ?1)
```

Parameters:

- **?1:** "jhon"

### Example: nigt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nigt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nigt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) > ?1)
```

Parameters:

- **?1:** "jhon"