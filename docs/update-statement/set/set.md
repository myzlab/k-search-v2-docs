---
title: Set
sidebar_label: Set
---

## Definition

The `set` methods allows you to add the `USING` clause to the query.

The methods available to use this functionality are:

- `set(KColumn kColumn, KColumnAllowedToSetUpdate kColumnAllowedToSetUpdate)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) which is the column to modify and receives a column or value which will be assigned to the column. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/select/introduction#3-values), [`KCondition`](/docs/select-statement/select/introduction#4-kcondition), [`KRaw`](/docs/select-statement/select/introduction#7-kraw), [`Case conditional expression`](/docs/select-statement/select/introduction#8-case-conditional-expression).
- `set(KColumn kColumn, KQuery kQuery)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) which is the column to modify and receives a KQuery which will be assigned to the column.
- `set(KColumn kColumn, Object object)`: Receives a [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) which is the column to modify and receives any object which will be assigned to the column.

## Method hierarchy

The `set` method can be used right after the following methods:

- [`update`](/docs/update-statement/update/)
- [`set`](/docs/update-statement/set/)

and the subsequent methods that can be called are:

- [`set`](/docs/update-statement/set/)
- [`from`](/docs/update-statement/from/)
- [`where`](/docs/update-statement/where/)
- [`returning`](/docs/update-statement/returning)
- [`execute`](/docs/select-statement/select/)

## Example

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.set(APP_USER.EMAIL, caseConditional()
    .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7))).then(APP_USER.EMAIL)
    .elseResult(val("No email available"))
    .as("email")
)
.set(APP_USER.UPDATED_AT, LocalDateTime.now())
.set(APP_USER.UUID, UUID.fromString("3694ecd1-f8ca-4e50-9279-12154c1db9a7"))
.set(APP_USER.ACTIVE, raw("NOT active"))
.set(APP_USER.ROLE_ID, val(22))
.where(APP_USER.ID.eq(55L))
.execute();
```

SQL generated:

```sql
UPDATE app_user au 
SET first_name = au.last_name,
    email = CASE WHEN au.created_at > ?1 THEN au.email ELSE ?2 END,
    updated_at = ?3,
    uuid = ?4,
    active = NOT active,
    role_id = ?5
WHERE au.id = ?6
```

Parameters:

- **?1:** 2023-01-17T18:29:28.461981
- **?2:** "No email available"
- **?3:** 2023-01-24T18:29:28.46279
- **?4:** 3694ecd1-f8ca-4e50-9279-12154c1db9a7
- **?5:** 22
- **?6:** 55