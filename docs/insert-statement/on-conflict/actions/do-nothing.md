---
title: Do nothing
sidebar_label: Do nothing
---

## Definition

This action indicates that no operation was should be performed when a conflict occurs.

## Available methods

### 1. `doNothing()`

- It does not receive parameters.

:::info

To make use of this action, you must call the `doNothing` method right after the [`onConflict`](/docs/insert-statement/on-conflict) method.

:::

## Example

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
.doNothing()
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file, fileurl, platform_code, i18n_key)
VALUES (?1, ?2, ?3, ?4, NULL), (?5, ?6, ?7, ?8, ?9)
ON CONFLICT DO NOTHING
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