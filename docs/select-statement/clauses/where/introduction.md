---
title: PostgreSQL WHERE statement
sidebar_label: Introduction
---

## Introduction

In this section you will learn the basic concepts to implement the PostgreSQL WHERE statement de through **_KSearch_** library.

The PostgreSQL WHERE statement allows you to perform mainly with three functionalities:

- Filter the rows that will be returned in a SELECT statement

Syntax:

```sql showLineNumbers
SELECT ...
FROM ... 
WHERE conditions
```

- Filter the rows that will be modified in a UPDATE statement

Syntax:

```sql showLineNumbers
UPDATE ...
SET ...
WHERE conditions
```

- Filter the rows that will be deleted in a DELETE statement

Syntax:

```sql showLineNumbers
DELETE FROM ...
WHERE conditions
```

## Basic Concepts

There are a wide variety of methods available in the **_KSearch_** library so that you can add different conditions to PostgreSQL statements. Before studying all these methods, you should learn some basic concepts that we will show below so that you can fully exploit the potential that **_KSearch_** offers you.

### 1. Null conditions are ignored

Every time you add a condition to the statement you want to build, if the value associated with that condition is null, then this condition is omitted from the PostgreSQL statement.

For the PostgreSQL UPDATE and DELETE statements will result in the activation of the insurance against null conditions. This will be explained in item number 2.

For the PostgreSQL SELECT statement, it does not bring any greater consequence than the omission of the condition as explained previously. To fully understand the effect on the PostgreSQL SELECT statement, we will illustrate it with the following practical example:

**Example 1**: Find users whose names are "John"

Java code:

```java showLineNumbers
final String name = "John";

K.
table("app_user").
select(
    "id"
).
where("name", name).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT id
FROM app_user
WHERE name = ?1
```

Parameters:

- ?1 → "John"

**Example 2**: Find users by intentionally sending the null value as a parameter from Java to a WHERE condition.

Java code:

```java showLineNumbers
K.
table("app_user").
select(
    "id"
).
where("name", null).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT id
FROM app_user
```

Parameters: None

Note that in the second example, when the value passed to the condition is null, the SELECT statement does not stop being generated, it only results in this condition being omitted. Please use this **_KSearch_** feature with great caution.

### 2. Insurance against null conditions

This insurance is only implemented for the PostgreSQL UPDATE and DELETE statements.
Its operation is simple, if the generation of the UPDATE or DELETE statements contains a condition with a null value, then the build and execution of the statement is stopped and throws a KException with the following message:

**The query cannot be executed for protection. A condition has a null value**

This insurance is implemented in order to avoid execute UPDATE and DELETE statements on a whole table in the database in the wrong way.

### 3. Conscious use of modifiers I, AND, OR y NOT

The great variety of methods available in the  library to add the different conditions to PostgreSQL statements is due to their availability in the different facets I, AND, OR y NOT.

As a general rule we will start by defining that:

- Modifiers are divided into two groups:
    - Top-level modifiers made up of AND and OR modifiers.
    - Lower-level modifiers made up of I and NOT modifiers.
- The top-level modifiers are the only Mutually Exclusive and Collectively Exhaustive for the same condition, that is, each condition will always be preceded only by the AND modifier or only by the OR modifier but never by both at the same time and never by either.
- Lower-level modifiers can be used simultaneously with any other modifier.
- The first condition added to the WHERE clause, its applied AND or OR modifier will be automatically deleted.

We will proceed to theoretically define each of these modifiers:

- **Top level modifier AND**: This modifier allows adding the new condition preceded by the AND operator. This modifier is implemented by default in each of the methods that allow adding the different conditions to PostgreSQL statements.
- **Top level modifier OR**: This modifier allows adding the new condition preceded by the OR operator. This modifier must be invoked through the or prefix in each of the methods that allow adding the different conditions to PostgreSQL statements.
- **Lower-level modifier I**: This modifier allows you to remove case sensitivity for the condition being added. This modifier must be invoked through the letter I in each of the methods that allow adding the different conditions to PostgreSQL statements. This modifier only applies to conditions that involve text or similar values.
- **Lower-level modifier NOT**: This modifier allows you to apply the NOT operator to the condition being added. This modifier must be invoked through the Not word in each of the methods that allow adding the different conditions to PostgreSQL statements.

Once the upper-level and lower-level modifiers have been defined, let's see the basic structure of the methods available in the **_KSearch_** library to add the different conditions to PostgreSQL statements.

<p class="text--center">
  orWhere | where + [ Not ] + [ I ] + Method
</p>

For a full understanding of the modifiers and the basic structure, we will illustrate it with the following practical example:

**Example 1**: Find the ids of users whose name contains at least one "A" vowel (uppercase or lowercase) or those whose last name is the NULL value.

Java code:

```java showLineNumbers
final String vocal = "a";

K.
table("app_user").
select(
    "id"
).
whereILikeAny("name", vocal). // --> where + I + LikeAny
orWhereNull("last_name").     // --> orWhere + Null
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT id
FROM app_user
WHERE UPPER(name) LIKE ?1
OR last_name IS NULL
```

Parameters:

- ?1 → "%A%"



