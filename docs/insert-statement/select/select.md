---
title: Select
sidebar_label: Select
---

## Definition

The `select` methods allows you to add a `SELECT` statement to the query.

The only one method available to use this functionality is:

- `select(KQuery kQuery)`: Receives a KQuery which will be supplied to the `INSERT INTO` clause.

## Method hierarchy

The `select` method can be used right after the following methods or objects:

- [`columns`](/docs/insert-statement/columns/)

and the subsequent methods that can be called are:

- [`onConflict`](/docs/select-statement/select/)
- [`returning`](/docs/insert-statement/returning/)
- [`execute`](/docs/select-statement/select/)

## Example

Java code:

```java
final KQuery subqueryLanguages = 
    k
    .select(LANGUAGE.NAME)
    .from(LANGUAGE)
    .where(LANGUAGE.ID.lt(3));

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME)
.select(subqueryLanguages).execute();
```

SQL generated:

```sql
INSERT INTO language (name)
SELECT la.name
FROM language la
WHERE la.id < ?1
```

Parameters:

- **?1:** 3