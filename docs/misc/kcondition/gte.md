---
title: Greater Than Or Equal To methods
sidebar_label: Greater Than Or Equal To (>=)
---

## Definition

The Greater Than Or Equal To methods allow you to add the **__>=__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name       | Short method name | SQL to generate                      |
|--------------------------|-------------------|--------------------------------------|
| greaterThanOrEqualTo     | gte               | leftOp >= rightOp                     |
| iGreaterThanOrEqualTo    | igte              | LOWER(leftOp) >= LOWER(rightOp)       |
| notGreaterThanOrEqualTo  | ngte              | NOT (leftOp >= rightOp)               |
| notIGreaterThanOrEqualTo | nigte             | NOT (LOWER(leftOp) >= LOWER(rightOp)) |

:::info

For all cases, the object that calls Greater Than Or Equal To methods will be placed as the operand on the left side of the **__>=__** operator and the object or value received by parameter will be placed on the right side of the **__>=__** operator.

:::

## 1. greaterThanOrEqualTo | gte

:::tip SQL to generate

```sql
leftOperand >= rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/select-statement/select/introduction#3-values), [`KValTextField`](/docs/select-statement/select/introduction#3-values), `KQuery`, [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: gte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.gte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name >= au.last_name
```

Parameters:

- None

### Example: gte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.gte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name >= ?1
```

Parameters:

- **?1:** "Jhon"

### Example: gte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.gte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.gte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name >= ?1
```

Parameters:

- **?1:** "Jhon"

### Example: gte(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.gte(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id >= (
    SELECT MAX(aus.app_user_id)
    FROM app_user_specialty aus
)
```

Parameters:

- None

## 2. iGreaterThanOrEqualTo | igte

:::tip SQL to generate

```sql
LOWER(leftOperand) >= LOWER(rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: igte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.igte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) >= LOWER(au.last_name)
```

Parameters:

- None

### Example: igte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.igte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) >= ?1
```

Parameters:

- **?1:** "jhon"

### Example: igte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.igte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.igte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) >= ?1
```

Parameters:

- **?1:** "jhon"

## 3. notGreaterThanOrEqualTo | ngte

:::tip SQL to generate

```sql
NOT (leftOperand >= rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/select-statement/select/introduction#3-values), [`KValTextField`](/docs/select-statement/select/introduction#3-values), `KQuery`, [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: ngte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ngte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name >= au.last_name)
```

Parameters:

- None

### Example: ngte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ngte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name >= ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: ngte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ngte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ngte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name >= ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: ngte(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.ngte(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (
    au.id >= (
        SELECT MAX(aus.app_user_id)
        FROM app_user_specialty aus
    )
)
```

Parameters:

- None

## 4. notIGreaterThanOrEqualTo | nigte

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) >= LOWER(rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/select-statement/select/introduction#3-values), [`KOptionalKColumn`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/kcondition/introduction#2-optional-conditions).

### Example: nigte(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nigte(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) >= LOWER(au.last_name))
```

Parameters:

- None

### Example: nigte(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nigte("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) >= ?1)
```

Parameters:

- **?1:** "jhon"

### Example: nigte(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nigte(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nigte(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) >= ?1)
```

Parameters:

- **?1:** "jhon"