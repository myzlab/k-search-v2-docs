---
title: In methods
sidebar_label: In
---

## Definition

The In methods allow you to add the **__IN__** operator to the query.

The methods available are:

| Normal method name |  SQL to generate                         |
|--------------------|------------------------------------------|
| in                 |  leftOp IN (rightOp1, rightOp2, ...)     |
| notIn              |  leftOp NOT IN (rightOp1, rightOp2, ...) |

:::info

For all cases, the object that calls In methods will be placed as the operand on the left side of the **__IN__** operator and the list of values received by parameter will be placed on the right side of the **__IN__** operator.

:::

## 1. in

:::tip SQL to generate

```sql
leftOperand IN (rightOperand1, rightOperand2, ...)
```
:::

This method takes a single parameter and the possible values are:

`Collection`, `Object[]`, [`KOptionalCollection`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalArrayObject`](/docs/kcondition/introduction#2-optional-conditions).

### Example: in(Collection)

Java code:

```java
final List<String> emails = new ArrayList<>(){{
    add("contacto@myzlab.com");
    add("hi@myzlab.com");
}};

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.in(emails))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email IN (?1, ?2)
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "hi@myzlab.com"

### Example: in(KOptionalCollection) [omitOnEmptyCollection=true]

Java code:

```java
final List<String> emails = new ArrayList<>(){{
    add("contacto@myzlab.com");
    add("hi@myzlab.com");
}};

final List<String> emptyEmails = new ArrayList<>();

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.in(emails))
.and(APP_USER.EMAIL.in(optional(emptyEmails, true)))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email IN (?1, ?2)
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "hi@myzlab.com"

### Example: in(KOptionalCollection) [omitOnEmptyCollection=false]

Java code:

```java
final List<String> emails = new ArrayList<>(){{
    add("contacto@myzlab.com");
    add("hi@myzlab.com");
}};

final List<String> emptyEmails = new ArrayList<>();

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.in(emails))
.and(APP_USER.EMAIL.in(optional(emptyEmails, false)))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email IN (?1, ?2)
AND 1 = 0
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "hi@myzlab.com"

## 2. notIn

:::tip SQL to generate

```sql
leftOperand NOT IN (rightOperand1, rightOperand2, ...)
```
:::

This method takes a single parameter and the possible values are:

`Collection`, `Object[]`, [`KOptionalCollection`](/docs/kcondition/introduction#2-optional-conditions), [`KOptionalArrayObject`](/docs/kcondition/introduction#2-optional-conditions).

### Example: notIn(Collection)

Java code:

```java
final List<String> emails = new ArrayList<>(){{
    add("contacto@myzlab.com");
    add("hi@myzlab.com");
}};

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.notIn(emails))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email NOT IN (?1, ?2)
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "hi@myzlab.com"

### Example: notIn(KOptionalCollection) [omitOnEmptyCollection=true]

Java code:

```java
final List<String> emails = new ArrayList<>(){{
    add("contacto@myzlab.com");
    add("hi@myzlab.com");
}};

final List<String> emptyEmails = new ArrayList<>();

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.notIn(emails))
.and(APP_USER.EMAIL.notIn(optional(emptyEmails, true)))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email NOT IN (?1, ?2)
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "hi@myzlab.com"

### Example: notIn(KOptionalCollection) [omitOnEmptyCollection=false]

Java code:

```java
final List<String> emails = new ArrayList<>(){{
    add("contacto@myzlab.com");
    add("hi@myzlab.com");
}};

final List<String> emptyEmails = new ArrayList<>();

k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.notIn(emails))
.and(APP_USER.EMAIL.notIn(optional(emptyEmails, false)))
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE au.email NOT IN (?1, ?2)
AND 1 = 1
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "hi@myzlab.com"