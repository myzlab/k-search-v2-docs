---
title: Set
sidebar_label: Set
---

## Definition

The `set` methods allows you to add the `USING` clause to the query.

## Available methods

### 1. `set(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn, KColumnAllowedToSetUpdate kColumnAllowedToSetUpdate)`

- **kTableColumn:** is the column that will be updated.
- **kColumnAllowedToSetUpdate:** is the expression whose result will be assigned to the column.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

### 2. `set(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn, KQuery kQuery)`

- **kTableColumn:** is the column that will be updated.
- **kQuery:** is a subquery whose result will be assigned to the column.

### 3. `set(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn, Object object)`

- **kTableColumn:** is the column that will be updated.
- **object:** is the value that will be assigned to the column.  
Among the possible values are: Numeric values, boolean values, date values, string values, char values, uuid values.

## Method hierarchy

The `set` method can be used right after the following methods:

- [`update`](/docs/update-statement/update/), [`set`](/docs/update-statement/set/)

and the subsequent methods that can be called are:

- [`set`](/docs/update-statement/set/), [`from`](/docs/update-statement/from/), [`where`](/docs/update-statement/where/), [`returning`](/docs/update-statement/returning), [`execute`](/docs/select-statement/select/)

## Example

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.set(APP_USER.EMAIL, caseConditional()
    .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7))).then(APP_USER.EMAIL)
    .elseResult(val("No email available"))
    .end()
)
.set(APP_USER.UPDATED_AT, LocalDateTime.now())
.set(APP_USER.CUSTOMER_ID, raw("88"))
.set(APP_USER.UUID, UUID.fromString("3694ecd1-f8ca-4e50-9279-12154c1db9a7"))
.set(APP_USER.ACTIVE, not(APP_USER.ACTIVE))
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