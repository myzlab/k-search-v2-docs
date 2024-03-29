---
title: With
sidebar_label: With
---

## Definition

The `with` method allows you to add the `WITH` clause to the query.

## Available methods

### 1. `with(`[`KCommonTableExpressionFilled...`](/docs/misc/cte) `kCommonTableExpressionsFilled)`

- **kCommonTableExpressionsFilled:** are all _Common Table Expressions_ or _CTEs_ that will be added to the `WITH` clause.

## Method hierarchy

The `with` method can be used right after the following methods or objects:

- [`KBuilder`](/docs/get-started/installation/springboot-jdbc#ready-to-use)

and the subsequent method that can be called is:

- [`insertInto`](/docs/insert-statement/insert-into/)

## Example

Java code:

```java
final KValues languages = values()
    .append("Language 1")
    .append("Language 2");

final KCommonTableExpressionFilled languagesCte = 
    cte("language_cte")
    .as(
        k
        .insertInto(LANGUAGE)
        .columns(LANGUAGE.NAME)
        .values(languages)
        .returning(val(1).as("tenant"), LANGUAGE.ID.noTableAlias()),
        "la_cte"
    );

final KQuery subQueryInsert = 
    k
    .select(languagesCte.c("tenant"), languagesCte.c("id"))
    .from(languagesCte);

k
.with(languagesCte)
.insertInto(TENANT_LANGUAGE)
.columns(TENANT_LANGUAGE.TENANT_ID, TENANT_LANGUAGE.LANGUAGE_ID)
.select(subQueryInsert)
.execute();
```

SQL generated:

```sql
WITH language_cte AS (
    INSERT INTO language (name)
    VALUES (?1), (?2)
    RETURNING ?3 AS "tenant", id
)
INSERT INTO tenant_language (tenant_id, language_id)
SELECT la_cte.tenant, la_cte.id
FROM language_cte la_cte
```

Parameters:

- **?1:** "Language 1"
- **?2:** "Language 2"
- **?2:** 1