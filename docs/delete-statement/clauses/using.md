---
title: USING clause
sidebar_label: Using
---

In this section you will learn how to implement the `USING` clause of PostgreSQL through the **_KSearch_** library.

## USING clause

PostgreSQL doesn’t support the DELETE JOIN statement. However, it does support the USING clause in the DELETE statement that provides similar functionality as the DELETE JOIN.

The syntax of this type of method is given as follows:

- using(String table)

where:

- **table**: Name of the new table to be added in the USING clause.

## Examples

**Example 1**: Delete all products from "Jumbo" store

Java code:

```java showLineNumbers
final String storeName = "Jumbo";
        
K.
table("product p").
using("store s").
whereEqualColumn("p.store_id", "s.id").
where("s.name", storeName).
delete();
```

SQL generated:

```sql showLineNumbers
DELETE FROM product p
USING store s
WHERE p.store_id = s.id
AND s.name = ?1
```

Parameters:

- ?1 → "Jumbo"

**Example 2**: Delete all stores in the "Colombia" country

Java code:

```java showLineNumbers
final String countryName = "Colombia";
        
K.
table("store s").
using("city ci").
using("country co").
whereEqualColumn("s.city_id", "ci.id").
whereEqualColumn("ci.country_id", "co.id").
where("co.name", countryName).
delete();
```

SQL generated:

```sql showLineNumbers
DELETE FROM store s
USING city ci, country co
WHERE s.city_id = ci.id
AND ci.country_id = co.id
AND co.name = ?1
```

Parameters:

- ?1 → "Colombia"