---
title: Returning
sidebar_label: Returning
---

## Definition

The `returning` methods allows you to add the `RETURNING` clause to the query.

## Available methods

- `returning(KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

## Method hierarchy

The `returning` method can be used right after the following methods or objects:

- [`deleteFrom`](/docs/delete-statement/delete-from/), [`using`](/docs/delete-statement/using/), [`where`](/docs/delete-statement/where/)

and the subsequent methods that can be called are:

- [`execute`](/docs/select-statement/select/)

## Example

Java code:

```java
k
.deleteFrom(APP_USER)
.returning(
    APP_USER.ID,
    concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).as("fullName"),
    coalesce(APP_USER.LAST_NAME, APP_USER.FIRST_NAME),
    raw("au.role_id"),
    caseConditional()
        .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7))).then(APP_USER.EMAIL)
        .elseResult(val("No email available"))
        .as("email")
)
.execute(AppUser.class);
```

SQL generated:

```sql
DELETE
FROM app_user au
RETURNING
    au.id,
    CONCAT(au.first_name || ?1 || au.last_name) AS "fullName",
    COALESCE(au.last_name, au.first_name),
    au.role_id,
    CASE WHEN au.created_at > ?2 THEN au.email ELSE ?3 END AS "email"
FROM app_user au
```

Parameters:

- **?1:** " "
- **?2:** 2023-01-16T08:33:02.061698
- **?3:** "No email available"