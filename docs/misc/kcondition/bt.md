---
title: Between methods
sidebar_label: Between
---

## Definition

The Between methods allow you to add the **__BETWEEN__** operator to the query.

The methods available in **_Normal method name_** and the **_Short method name_** versions are:

| Normal method name   | Short method name | SQL to generate                                                 |
|----------------------|-------------------|-----------------------------------------------------------------|
| between              | bt                | leftOp BETWEEN rightOp1 AND rightOp2                            |
| iBetween             | ibt               | LOWER(leftOp) BETWEEN LOWER(rightOp1) AND LOWER(rightOp2)       |
| notBetween           | nbt               | NOT (leftOp BETWEEN rightOp1 AND rightOp2)                      |
| notIBetween          | nibt              | NOT (LOWER(leftOp) BETWEEN LOWER(rightOp1) AND LOWER(rightOp2)) |

:::info

For all cases, the object that calls Between methods will be placed as the operand on the left side of the **__BETWEEN__** operator and the objects or values received by parameter will be placed on the right side of the **__BETWEEN__** operator.

:::

## 1. between | bt

:::tip SQL to generate

```sql
leftOp BETWEEN rightOp1 AND rightOp2
```
:::

This method takes two parameters and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/misc/select-list-values#3-values), [`KValTextField`](/docs/misc/select-list-values#3-values).

:::note

The two parameters must always be of the same type.

:::

### Example: bt(KColumn, KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.bt(APP_USER.ROLE_ID, APP_USER.ROLE_ID.add(5)))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id BETWEEN au.role_id AND (au.role_id + ?1)
```

Parameters:

- **?1:** 5

### Example: bt(Number, Number)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.bt(5, 10))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.id BETWEEN ?1 AND ?2
```

Parameters:

- **?1:** 5
- **?2:** 10

## 2. iBetween | ibt

:::tip SQL to generate

```sql
LOWER(leftOp) BETWEEN LOWER(rightOp1) AND LOWER(rightOp2)
```
:::

This method takes two parameters and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values).

:::note

The two parameters must always be of the same type.

:::

### Example: ibt(KColumn, KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.ibt(APP_USER.FIRST_NAME, APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.email) BETWEEN LOWER(au.first_name) AND LOWER(au.last_name)
```

Parameters:

- None

### Example: ibt(String, String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.ibt("A", "B"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE LOWER(au.email) BETWEEN ?1 AND ?2
```

Parameters:

- **?1:** "a"
- **?1:** "b"

## 3. notBetween | nbt

:::tip SQL to generate

```sql
NOT (leftOp BETWEEN rightOp1 AND rightOp2)
```
:::

This method takes two parameters and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `Number`, `String`, `LocalDate`, `LocalDateTime`, [`KValNumberField`](/docs/misc/select-list-values#3-values), [`KValTextField`](/docs/misc/select-list-values#3-values).

:::note

The two parameters must always be of the same type.

:::

### Example: nbt(KColumn, KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.nbt(APP_USER.ROLE_ID, APP_USER.ROLE_ID.add(5)))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (au.id BETWEEN au.role_id AND (au.role_id + ?1))
```

Parameters:

- **?1:** 5

### Example: nbt(Number, Number)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.ID.nbt(5, 10))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT(au.id BETWEEN ?1 AND ?2)
```

Parameters:

- **?1:** 5
- **?2:** 10

## 4. notIBetween | nibt

:::tip SQL to generate

```sql
NOT (LOWER(leftOp) BETWEEN LOWER(rightOp1) AND LOWER(rightOp2))
```
:::

This method takes two parameters and the possible values are:

[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), `String`, [`KValTextField`](/docs/misc/select-list-values#3-values).

:::note

The two parameters must always be of the same type.

:::

### Example: nibt(KColumn, KColumn)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.nibt(APP_USER.FIRST_NAME, APP_USER.LAST_NAME))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.email) BETWEEN LOWER(au.first_name) AND LOWER(au.last_name))
```

Parameters:

- None

### Example: nibt(String, String)

Java code:

```java
k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.nibt("A", "B"))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.email) BETWEEN ?1 AND ?2)
```

Parameters:

- **?1:** "a"
- **?1:** "b"
