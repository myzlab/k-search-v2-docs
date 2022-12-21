---
title: Like methods
sidebar_label: Like
---

## Definition

The Like methods allow you to add the LIKE condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

## LikeAny methods

The LikeAny methods allow you to add the LIKE condition to the SQL statement adding the '%' character on both sides of the supplied value. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + LikeAny(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to enter in the condition (The '%' characters are added automatically). When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose name does not contain the word "oh" (Ignore case sensitivity).

Java code:

```java showLineNumbers
final String word = "oh";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereNotILikeAny("au.name", word).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE NOT UPPER(au.name) LIKE ?1
```

Parameters:

- ?1 → "%OH%"

**Example 2**: Find the id and last name of all users whose name contains the word "oh" or "ar".

Java code:

```java showLineNumbers
final String word1 = "oh";
final String word2 = "ar";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereEqual("au.name", word1).
orWhereEqual("au.name", word2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.name LIKE ?1
OR au.name LIKE ?2
```

Parameters:

- ?1 → "%oh%"
- ?1 → "%ar%"

## LikeStartWith methods

The LikeStartWith methods allow you to add the LIKE condition to the SQL statement adding the '%' character to the end of the supplied value. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + LikeStartWith(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to enter in the condition (The '%' character are added automatically). When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose name does not begin with the word "jh" (Ignore case sensitivity).

Java code:

```java showLineNumbers
final String word = "jh";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereNotILikeStartWith("au.name", word).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE NOT UPPER(au.name) LIKE ?1
```

Parameters:

- ?1 → "JH%"

**Example 2**: Find the id and last name of all users whose name begins with the vowel "a" or with the vowel "U".

Java code:

```java showLineNumbers
final String vowel1 = "a";
final String vowel2 = "u";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereLikeStartWith("au.name", vowel1).
orWhereLikeStartWith("au.name", vowel2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.name LIKE ?1
OR au.name LIKE ?2
```

Parameters:

- ?1 → "a%"
- ?1 → "U%"

## LikeEndWith methods

The LikeEndWith methods allow you to add the LIKE condition to the SQL statement adding the '%' character to the beginning of the supplied value. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + [ I ] + LikeEndWith(String c, Object v)

where:

- **c**: Name of the column against which you want to add the condition.
- **v**: Value to enter in the condition (The '%' character are added automatically). When executing the query, this value is sent as a parameter to avoid SQL injection.

### Examples

**Example 1**: Find the id and last name of all users whose name does not end with the word "jh" (Ignore case sensitivity).

Java code:

```java showLineNumbers
final String word = "jh";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereNotILikeEndWith("au.name", word).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE NOT UPPER(au.name) LIKE ?1
```

Parameters:

- ?1 → "%JH"

**Example 2**: Find the id and last name of all users whose name ends with the vowel "a" or with the vowel "U".

Java code:

```java showLineNumbers
final String vowel1 = "a";
final String vowel2 = "u";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereLikeEndWith("au.name", vowel1).
orWhereLikeEndWith("au.name", vowel2).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.name LIKE ?1
OR au.name LIKE ?2
```

Parameters:

- ?1 → "a%"
- ?1 → "U%"