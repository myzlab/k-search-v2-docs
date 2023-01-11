---
title: KCondition
sidebar_label: Introduction
---

import K from '@site/src/components/K';

A condition is any expression that evaluates to a result of type boolean. When is used in `WHERE` clause, any row that does not satisfy this condition will be eliminated from the result. A row satisfies the condition if it returns true when the actual row values are substituted for any variable references.

In Java, we will see a condition as the [`Kcondition`](/docs/kcondition/introduction) object.

:::tip

A [`Kcondition`](/docs/kcondition/introduction) can be used in the `WHERE` clause and in the [`SELECT`](/docs/select-statement/select/introduction) list.

:::

## Basic Concepts

There are a wide variety of methods available in <K/> with which you can add different conditions to the query. Before studying all these methods, you should learn some basic concepts that we will show below so that you can fully exploit the potential that <K/> offers you.

## 1. How to create a `KCondition`?

For any type of [`Kcondition`](/docs/kcondition/introduction), the operand on the left side of the operator is always the one that must call the method that will create the [`Kcondition`](/docs/kcondition/introduction). Then it must be complemented with the operand on the right hand side if required by the called method.

The operands that have the methods available to create [`Kcondition`](/docs/kcondition/introduction) are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/select/introduction#3-values).

### Example: KTableColumn

Java code:

```java
APP_USER.EMAIL.eq("a value")
```

### Example: KColumn

Java code:

```java
concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).likeAny("tr")
```

### Example: Values

Java code:

```java
val(77).lessThan(APP_USER.ID)
```

## 2. Optional conditions

Through the `optional` method we can add optional values to conditions in such a way that if the value passed to the condition is null, then the SQL statement is generated omitting that condition and the program does not throw any type of error or problem. If the optional value is on the right or left side of the operator, its operation is the same and the entire condition is considered optional.

The available methods for adding optional values are:

- `optional(KColumn kColumn)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) value and returns a `KOptionalKColumn` that can be added to a condition to make it an optional condition.
- `optional(KValNumberField kValNumberField)`: Receives a `KValNumberField` value and returns a `KOptionalKValNumberField` that can be added to a condition to make it an optional condition.
- `optional(KValTextField kValTextField)`: Receives a `KValTextField` value and returns a `KOptionalKValTextField` that can be added to a condition to make it an optional condition.
- `optional(Number number)`: Receives a `Number` value and returns a `KOptionalNumber` that can be added to a condition to make it an optional condition.
- `optional(Long value)`: Receives a `Long` value and returns a `KOptionalLong` that can be added to a condition to make it an optional condition.
- `optional(String value)`: Receives a `String` value and returns a `KOptionalString` that can be added to a condition to make it an optional condition.
- `optional(UUID value)`: Receives a `UUID` value and returns a `KOptionalUuid` that can be added to a condition to make it an optional condition.
- `optional(LocalDate localDate)`: Receives a `LocalDate` value and returns a `KOptionalLocalDate` that can be added to a condition to make it an optional condition.
- `optional(LocalDateTime localDateTime)`: Receives a `LocalDateTime` value and returns a `KOptionalLocalDateTime` that can be added to a condition to make it an optional condition.
- `optional(Collection values, boolean omitOnEmptyCollection)`: Receives a `Collection` value and returns a `KOptionalCollection` that can be added to a condition to make it an optional condition. If the _omitOnEmptyCollection_ parameter is supplied as true, indicates that the condition must be omitted when the collection is empty. If the _omitOnEmptyCollection_ parameter is supplied as false, the condition will not be omitted when the collection is empty.
- `optional(Object[] values, boolean omitOnEmptyArray)`: Receives a `Object[]` value and returns a `KOptionalArrayObject` that can be added to a condition to make it an optional condition. If the _omitOnEmptyArray_ parameter is supplied as true, indicates that the condition must be omitted when the array is empty. If the _omitOnEmptyArray_ parameter is supplied as false, the condition will not be omitted when the array is empty.

### Example

Java code:

```java
final String nullString = null;
final Long longValue = 16L;

k
.select(APP_USER.ID, APP_USER.FIRST_NAME)
.from(APP_USER)
.where(APP_USER.EMAIL.eq(optional(nullString)))
.and(APP_USER.ID.gt(optional(longValue)))
.multiple();
```

SQL generated:

```sql
SELECT au.id, au.first_name
FROM app_user au
WHERE au.id > ?
```

Parameters:

- **?1:** 16

## 3. Normal method name vs Short method name

The methods available in <K/> to add different conditions to a query are in two versions: The **_Normal method name_** and the **_Short method name_** versions.

Both versions work exactly the same, the only difference is the length of the method name, which is shortened for more comfort and understanding of the code.

Some examples are:

| Normal method name   | Short method name |
|----------------------|-------------------|
| equal                | eq                |
| like                 | lk                |
| greaterThanOrEqualTo | gte               |
| iLikeAny             | ilka              |
| between              | bt                |
| notEqual             | neq               |
| notILikeEndWith      | nilkew            |
| lessThan             | lt                |

## 4. Conscious use of modifiers **I** and **NOT**

The great variety of available methods in <K/> to add different conditions to a query is due to their availability in the different facets **I** and **NOT**.

We will proceed to theoretically define each of these modifiers:

- **I modifier**: This modifier allows you to remove case sensitivity for the condition being added. This modifier must be invoked through the **_i_** letter in each of the methods that allow adding the different conditions to the query. This modifier only applies to conditions that involve text or similar values.
- **NOT modifier**: This modifier allows you to apply the `NOT` operator to the condition being added. This modifier must be invoked through the **_not_** word (**_n_** letter for the short name of methods) in each of the methods that allow adding the different conditions to the query.

Let's see the basic structure of the available methods in <K/> to add the different conditions to the query:

**Normal method name:**

<p class="text--center">
  not + I + Method<br/>
  i + Method<br/>
  not + Method<br/>
</p>

**Short method name:**

<p class="text--center">
  n + i + Method<br/>
  i + Method<br/>
  n + Method<br/>
</p>

### Example: Normal method name

Java code:

```java
 k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.notILikeAny("Maria"))//not + I + LikeAny
.and(APP_USER.ID.notGreaterThan(50))//not + GreaterThan
.and(APP_USER.FIRST_NAME.iEqual("Juan"))//i + Equal
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.email) LIKE ?1)
AND NOT (au.id > ?2)
AND LOWER(au.first_name) = ?3
```

Parameters:

- **?1:** "%maria%"
- **?2:** 50
- **?3:** "juan"

### Example: Short method name

Java code:

```java
 k
.select(APP_USER.ID)
.from(APP_USER)
.where(APP_USER.EMAIL.nilka("Maria"))//n + i + lka
.and(APP_USER.ID.ngt(50))//n + gt
.and(APP_USER.FIRST_NAME.ieq("Juan"))//i + eq
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE NOT (LOWER(au.email) LIKE ?1)
AND NOT (au.id > ?2)
AND LOWER(au.first_name) = ?3
```

Parameters:

- **?1:** "%maria%"
- **?2:** 50
- **?3:** "juan"

