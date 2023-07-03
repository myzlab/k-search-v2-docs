---
title: Columns
sidebar_label: Columns
---

## Definition

The `columns` methods allows you to add the `COLUMNS` section to the query.

## Available methods

- `columns(KTableColumn... kTableColumns)`: Receives a variable quantity of [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `COLUMNS` section.

## Method hierarchy

The `columns` method can be used right after the following methods or objects:

- [`insertInto`](/docs/insert-statement/insert-into/)

and the subsequent methods that can be called are:

- [`select`](/docs/insert-statement/select/), [`values`](/docs/insert-statement/values/)

## Example

Java code:

```java
final KValues languages = values()
    .append("Language 1", "File 1", 12)
    .append("Language 2", "File 2", 44);
    
k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME, LANGUAGE.FILE, LANGUAGE.PLATFORM_CODE)
.values(languages)
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file, platform_code)
VALUES (?1, ?2, ?3), (?4, ?5, ?6)
```

Parameters:

- **?1:** "Language 1"
- **?2:** "File 1"
- **?3:** 12
- **?4:** "Language 2"
- **?5:** "File 2"
- **?6:** 44
