---
title: Equal methods
sidebar_label: Equal (=)
---

## Definition

The Equal methods allow you to add the **__=__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                      |
|----------------------|-------------------|--------------------------------------|
| equal                | eq                | leftOp = rightOp                     |
| iEqual               | ieq               | LOWER(leftOp) = LOWER(rightOp)       |
| notEqual             | neq               | NOT (leftOp = rightOp)               |
| notIEqual            | nieq              | NOT (LOWER(leftOp) = LOWER(rightOp)) |

:::info

For all cases, the object that calls Equal methods will be placed as the operand on the left side of the **__=__** operator and the object or value received by parameter will be placed on the right side of the **__=__** operator.

:::

## 1. equal | eq

:::tip SQL to generate

```sql
leftOperand = rightOperand
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, `UUID`, [`KValNumberField`](/docs/misc/select-list-values#3-values), [`KValTextField`](/docs/misc/select-list-values#3-values), `KQuery`, [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalUuid`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/misc/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: eq(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.eq(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name = au.last_name
```

Parameters:

- None

### Example: eq(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.eq("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name = ?1
```

Parameters:

- **?1:** "Jhon"

### Example: eq(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.eq(optional(nullValue)))
.and(APP_USER.FIRST_NAME.eq(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.first_name = ?1
```

Parameters:

- **?1:** "Jhon"

### Example: eq(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.eq(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id = (
    SELECT MAX(aus.app_user_id)
    FROM app_user_specialty aus
)
```

Parameters:

- None

### Example: eq([`KTuple`](/docs/misc/ktuple))

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(
    tuple(APP_USER.FIRST_NAME, APP_USER.EMAIL)
        .eq(
            tuple(val("kecon"), val("contacto@myzlab.com"))
        )
)
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM auth.app_user au
WHERE (au.first_name, au.email) = (?1, ?2)
```

Parameters:

- **?1:** "kecon"
- **?2:** "contacto@myzlab.com"

## 2. iEqual | ieq

:::tip SQL to generate

```sql
LOWER(leftOperand) = LOWER(rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: ieq(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ieq(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) = LOWER(au.last_name)
```

Parameters:

- None

### Example: ieq(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ieq("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) = ?1
```

Parameters:

- **?1:** "jhon"

### Example: ieq(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.ieq(optional(nullValue)))
.and(APP_USER.FIRST_NAME.ieq(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.first_name) = ?1
```

Parameters:

- **?1:** "jhon"

## 3. notEqual | neq

:::tip SQL to generate

```sql
NOT (leftOperand = rightOperand)
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, `UUID`, [`KValNumberField`](/docs/misc/select-list-values#3-values), [`KValTextField`](/docs/misc/select-list-values#3-values), `KQuery`, [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalNumber`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDate`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLocalDateTime`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalUuid`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValNumberField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalLong`](/docs/misc/kcondition/introduction#2-optional-conditions).

If the object received by parameter is a `KQuery`, it will be treated as a subquery and you must ensure that it returns only one column comparable to the operand on the left side of the condition.

### Example: neq(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.neq(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name = au.last_name)
```

Parameters:

- None

### Example: neq(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.neq("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name = ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: neq(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.neq(optional(nullValue)))
.and(APP_USER.FIRST_NAME.neq(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.first_name = ?1)
```

Parameters:

- **?1:** "Jhon"

### Example: neq(KQuery)

Java code:

```java
final KQuery subquery = 
    k
    .select(max(APP_USER_SPECIALTY.APP_USER_ID))
    .from(APP_USER_SPECIALTY);

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.neq(subquery))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (
    au.id = (
        SELECT MAX(aus.app_user_id)
        FROM app_user_specialty aus
    )
)
```

Parameters:

- None

### Example: neq(KColumn (tuple))

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(
    tuple(APP_USER.FIRST_NAME, APP_USER.EMAIL)
        .neq(
            tuple(val("kecon"), val("contacto@myzlab.com"))
        )
)
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM auth.app_user au
WHERE NOT ((au.first_name, au.email) = (?1, ?2))
```

Parameters:

- **?1:** "kecon"
- **?2:** "contacto@myzlab.com"

## 4. notIEqual | nieq

:::tip SQL to generate

```sql
NOT (LOWER(leftOperand) = LOWER(rightOperand))
```
:::

This method takes a single parameter and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values), [`KOptionalKColumn`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalString`](/docs/misc/kcondition/introduction#2-optional-conditions), [`KOptionalKValTextField`](/docs/misc/kcondition/introduction#2-optional-conditions).

### Example: nieq(KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nieq(APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) = LOWER(au.last_name))
```

Parameters:

- None

### Example: nieq(String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nieq("Jhon"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) = ?1)
```

Parameters:

- **?1:** "jhon"

### Example: nieq(KOptionalString)

Java code:

```java
final String nullValue = null;

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.FIRST_NAME.nieq(optional(nullValue)))
.and(APP_USER.FIRST_NAME.nieq(optional("Jhon")))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.first_name) = ?1)
```

Parameters:

- **?1:** "jhon"