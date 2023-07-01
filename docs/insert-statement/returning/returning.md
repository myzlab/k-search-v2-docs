---
title: Returning
sidebar_label: Returning
---

## Definition

The `returning` methods allows you to add the `RETURNING` clause to the query.

The only one method available to use this functionality is:

- `returning(KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Method hierarchy

The `returning` method can be used right after the following methods or objects:

- [`select`](/docs/insert-statement/select/), [`values`](/docs/insert-statement/values/), [`doNothing`](/docs/insert-statement/on-conflict/#1-do-nothing), [`set`](/docs/insert-statement/on-conflict/#4-target-columns---do-update)

and the subsequent methods that can be called are:

- [`execute`](/docs/select-statement/select/)

The [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) referenced in the `RETURNING` clause cannot contain aliases, for this the `noAlias` method must be executed on all [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn).

There are 2 ways to call this method:

## 1. Calling from a `KTableColumn`

- `noAlias()`: It does not receive any parameters. The [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the affected.

## 2. Calling from the `KFunction` class

- `noAlias(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be the affected.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
final KValues valuesInsert = values()
    .append("Name", "Code A")
    .append("English", "Code B");
            
final KCollection<Language> languagesInserted = 
    k
    .insertInto(LANGUAGE)
    .columns(LANGUAGE.NAME, LANGUAGE.PLATFORM_CODE)
    .values(valuesInsert)
    .returning(
        LANGUAGE.ID.noAlias(),
        concat(LANGUAGE.NAME.noAlias(), val("-"), LANGUAGE.PLATFORM_CODE.noAlias()).as("nameDetail"),
        coalesce(LANGUAGE.NAME.noAlias(), LANGUAGE.PLATFORM_CODE.noAlias()),
        raw("i18n_key"),
        caseConditional()
            .when(LANGUAGE.CREATED_AT.noAlias().gt(LocalDateTime.now().minusDays(7))).then(LANGUAGE.FILE.noAlias())
            .elseResult(val("No file available"))
            .as("file")
    )
    .execute(Language.class);
```

SQL generated:

```sql
INSERT INTO language (name, platform_code)
VALUES (?1, ?2), (?3, ?4)
RETURNING
    id,
    CONCAT(name || ?5 || platform_code) AS "nameDetail",
    COALESCE(name, platform_code),
    i18n_key,
    CASE WHEN created_at > ?6 THEN file ELSE ?7 END AS "file"
```

Parameters:

- **?1:** "Name"
- **?2:** "Code A"
- **?3:** "English"
- **?4:** "Code B"
- **?5:** "-"
- **?6:** 2023-01-20T20:11:04.973543
- **?7:** "No file available"