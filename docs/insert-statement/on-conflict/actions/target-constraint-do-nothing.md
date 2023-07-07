---
title: Target Constraint - Do Nothing
sidebar_label: Target Constraint - Do Nothing
---

## Definition

This action indicates that no operation should be performed when a conflict occurs on a specific constraint.

## Available methods

### 1. `targetConstraint(String constraint)`

- **constraint:** the name of constraint where the conflict must occur.

### 2. `doNothing()`

- It does not receive parameters.

:::info

To make use of this action, you must call the `targetConstraint` and `doNothing` methods (in this order) right after the [`onConflict`](/docs/insert-statement/on-conflict) method.

:::

### Example

Java code:

```java
final KValues valuesInsert = values()
    .append("name conflicted 3", "es", "-", "backoffice", nullValue())
    .append("Español Test 3", "es", "-", "backoffice", "ABC");

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME, LANGUAGE.FILE, LANGUAGE.FILE_URL, LANGUAGE.PLATFORM_CODE, LANGUAGE.I18N_KEY)
.values(valuesInsert)
.onConflict()
.targetConstraint("pk_language")
.doNothing()
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file, fileurl, platform_code, i18n_key)
VALUES (?1, ?2, ?3, ?4, NULL), (?5, ?6, ?7, ?8, ?9)
ON CONFLICT ON CONSTRAINT "pk_language" DO NOTHING
```

Parameters:

- **?1:** "name conflicted 3"
- **?2:** "es"
- **?3:** "-"
- **?4:** "backoffice"
- **?5:** "Español Test 3"
- **?6:** "es"
- **?7:** "-"
- **?8:** "backoffice"
- **?9:** "ABC"