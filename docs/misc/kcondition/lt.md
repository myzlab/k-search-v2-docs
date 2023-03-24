---
title: Less Than methods
sidebar_label: Less Than (<)
---

## Definition

The Less Than methods allow you to add the **__<__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                      |
|----------------------|-------------------|--------------------------------------|
| lessThan             | lt                | leftOp < rightOp                     |
| iLessThan            | ilt               | LOWER(leftOp) < LOWER(rightOp)       |
| notLessThan          | nlt               | NOT (leftOp < rightOp)               |
| notILessThan         | nilt              | NOT (LOWER(leftOp) < LOWER(rightOp)) |

:::info

For all cases, the object that calls Less Than methods will be placed as the operand on the left side of the **__<__** operator and the object or value received by parameter will be placed on the right side of the **__<__** operator.

:::

## 1. lessThan | lt

:::tip SQL to generate

```sql
leftOperand < rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/misc/select-list-values#3-values), [`KValTextField`](/docs/misc/select-list-values#3-values), `KQuery`, [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/misc/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: lt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name < au.last_name
```

Parameters:

- None

### Example: lt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name < ?1
```

Parameters:

- **?1:** "Jhon"

### Example: lt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.lt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name < ?1
```

Parameters:

- **?1:** "Jhon"

### Example: lt(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.lt(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id < (
    SELECT MAX(aus.app_user_id)
    FROM app_user_specialty aus
)
```

Parameters:

- None

## 2. iLessThan | ilt

:::tip SQL to generate

```sql
LOWER(leftOperand) < LOWER(rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: ilt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) < LOWER(au.last_name)
```

Parameters:

- None

### Example: ilt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) < ?1
```

Parameters:

- **?1:** "jhon"

### Example: ilt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ilt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) < ?1
```

Parameters:

- **?1:** "jhon"

## 3. notLessThan | nlt

:::tip SQL to generate

```sql
NOT (leftOperand < rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/misc/select-list-values#3-values), [`KValTextField`](/docs/misc/select-list-values#3-values), `KQuery`, [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/misc/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: nlt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name < au.last_name)
```

Parameters:

- None

### Example: nlt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name < ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: nlt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nlt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name < ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: nlt(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.nlt(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (
    au.id < (
        SELECT MAX(aus.app_user_id)
        FROM app_user_specialty aus
    )
)
```

Parameters:

- None

## 4. notILessThan | nilt

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) < LOWER(rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nilt(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilt(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) < LOWER(au.last_name))
```

Parameters:

- None

### Example: nilt(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilt("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) < ?1)
```

Parameters:

- **?1:** "jhon"

### Example: nilt(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilt(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nilt(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) < ?1)
```

Parameters:

- **?1:** "jhon"