---
title: Less Than Or Equal To methods
sidebar_label: Less Than Or Equal To (<=)
---

## Definition

The Less Than Or Equal To methods allow you to add the **__<=__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name       | Short method name | SQL to generate                      |
|--------------------------|-------------------|--------------------------------------|
| lessThanOrEqualTo        | lte               | leftOp <= rightOp                     |
| iLessThanOrEqualTo       | ilte              | LOWER(leftOp) <= LOWER(rightOp)       |
| notLessThanOrEqualTo     | nlte              | NOT (leftOp <= rightOp)               |
| notILessThanOrEqualTo    | nilte             | NOT (LOWER(leftOp) <= LOWER(rightOp)) |

:::info

For all cases, the object that calls Less Than Or Equal To methods will be placed as the operand on the left side of the **__<=__** operator and the object or value received by parameter will be placed on the right side of the **__<=__** operator.

:::

## 1. lessThanOrEqualTo | lte

:::tip SQL to generate

```sql
leftOperand <= rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/select-statement/select/introduction#3-values), [`KValTextField`](/docs/select-statement/select/introduction#3-values), `KQuery`, [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: lte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name <= au.last_name
```

Parameters:

- None

### Example: lte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name <= ?1
```

Parameters:

- **?1:** "Jhon"

### Example: lte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.lte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.lte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name <= ?1
```

Parameters:

- **?1:** "Jhon"

### Example: lte(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.lte(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id <= (
    SELECT MAX(aus.app_user_id)
    FROM app_user_specialty aus
)
```

Parameters:

- None

## 2. iLessThanOrEqualTo | ilte

:::tip SQL to generate

```sql
LOWER(leftOperand) <= LOWER(rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: ilte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) <= LOWER(au.last_name)
```

Parameters:

- None

### Example: ilte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) <= ?1
```

Parameters:

- **?1:** "jhon"

### Example: ilte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ilte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ilte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) <= ?1
```

Parameters:

- **?1:** "jhon"

## 3. notLessThanOrEqualTo | nlte

:::tip SQL to generate

```sql
NOT (leftOperand <= rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/select-statement/select/introduction#3-values), [`KValTextField`](/docs/select-statement/select/introduction#3-values), `KQuery`, [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: nlte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name <= au.last_name)
```

Parameters:

- None

### Example: nlte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name <= ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: nlte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nlte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nlte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name <= ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: nlte(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.nlte(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (
    au.id <= (
        SELECT MAX(aus.app_user_id)
        FROM app_user_specialty aus
    )
)
```

Parameters:

- None

## 4. notILessThanOrEqualTo | nilte

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) <= LOWER(rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: nilte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) <= LOWER(au.last_name))
```

Parameters:

- None

### Example: nilte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) <= ?1)
```

Parameters:

- **?1:** "jhon"

### Example: nilte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nilte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nilte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) <= ?1)
```

Parameters:

- **?1:** "jhon"