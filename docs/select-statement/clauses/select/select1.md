---
title: Select 1
sidebar_label: Select 1
---

## Definition

The `select1` method allows you to add a `SELECT` clause with the number 1 as value, in that sense, it

```java
k
.select1()
```

is the same to do

```java
k
.select(val(1))
```

It method is commonly used in statements involving the `EXISTS` operator.

## Method Call Diagram

The `select1` method can be used right after the following methods or objects:

- k
- [`with`](/docs/select-statement/clauses/with)
- [`withRecursive`](/docs/select-statement/clauses/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/clauses/select/)

as shown in the following diagram:

![select1](/img/d/select1.png)

## Example

Java code:

```java
k
.select1()
.from(APP_USER);
```

SQL generated:

```sql showLineNumbers
SELECT ?1
FROM app_user au
```

Parameters:

- **?1:** 1