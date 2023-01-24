---
title: Returning
sidebar_label: Returning
---

## Definition

The `returning` methods allows you to add the [`RETURNING`](/docs/delete-statement/returning/introduction) clause to the query.

The only one method available to use this functionality is:

- `returning(KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives a variable quantity of columns and values that will be added to the [`RETURNING`](/docs/delete-statement/returning/introduction) clause. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Columns with alias`](/docs/select-statement/select/introduction#5-columns-with-alias), [`KRaw`](/docs/select-statement/select/introduction#7-kraw), [`Case conditional expression`](/docs/select-statement/select/introduction#7-case-conditional-expression).

## Method hierarchy

The `returning` method can be used right after the following methods or objects:

- [`set`](/docs/update-statement/set/)
- [`where`](/docs/update-statement/where/)

and the subsequent methods that can be called are:

- [`execute`](/docs/select-statement/select/)

## Example

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, coalesce(APP_USER.FIRST_NAME, val("No name")))
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
UPDATE app_user au
SET first_name = COALESCE(au.first_name, ?1)
RETURNING
    au.id,
    CONCAT(au.first_name || ?2 || au.last_name) AS "fullName",
    COALESCE(au.last_name, au.first_name),
    au.role_id,
    CASE WHEN au.created_at > ?3 THEN au.email ELSE ?4 END AS email
```

Parameters:

- **?1:** "No name"
- **?2:** " "
- **?3:** 2023-01-23 17:19:22.313
- **?4:** "No email available"