---
title: Select
sidebar_label: Select
---

## Definition

The `select` methods allows you to add the `SELECT` statement to the query.

The methods available to use this functionality are:

- `select(KColumnAllowedToSelect... kColumnsAllowedToSelect)`: Receives a variable quantity of columns and values that will be added to the [`SELECT`](/docs/select-statement/select/introduction) list. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/select/introduction#3-values), [`KCondition`](/docs/select-statement/select/introduction#4-kcondition), [`Columns with over`](/docs/select-statement/select/introduction#5-columns-with-over), [`Columns with alias`](/docs/select-statement/select/introduction#5-columns-with-alias), [`KRaw`](/docs/select-statement/select/introduction#7-kraw), [`Case conditional expression`](/docs/select-statement/select/introduction#7-case-conditional-expression).
- `select(KQuery kQuery, String alias)`: Receives a KQuery and an alias, which will be added as a subquery in the [`SELECT`](/docs/select-statement/select/introduction) list.

## Method hierarchy

The `select` method can be used right after the following methods or objects:

- k
- [`with`](/docs/select-statement/with)
- [`withRecursive`](/docs/select-statement/with)
- [`select`](/docs/select-statement/select/)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`where`](/docs/select-statement/where/)
- [`groupBy`](/docs/select-statement/group-by/)
- [`window`](/docs/select-statement/window/)
- [`except`](/docs/select-statement/combining/except)
- [`exceptAll`](/docs/select-statement/combining/except-all)
- [`intersect`](/docs/select-statement/combining/intersect)
- [`intersectAll`](/docs/select-statement/combining/intersect-all)
- [`union`](/docs/select-statement/combining/union)
- [`unionAll`](/docs/select-statement/combining/union-all)
- [`orderBy`](/docs/select-statement/order-by/)
- [`limit`](/docs/select-statement/limit)
- [`offset`](/docs/select-statement/offset)
- [`fetch`](/docs/select-statement/fetch/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: KColumnAllowedToSelect...

Java code:

```java
k
.select(
    APP_USER.ID,
    concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).as("fullName"),
    coalesce(APP_USER.LAST_NAME, APP_USER.FIRST_NAME),
    val(7),
    APP_USER.FIRST_NAME.isNull(),
    raw("au.role_id"),
    caseConditional()
        .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7))).then(APP_USER.EMAIL)
        .elseResult(val("No email available"))
        .as("email"),
    rowNumber().over(wd().orderBy(APP_USER.ID)).as("order")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.id,
    CONCAT(au.first_name || ?1 || au.last_name) AS "fullName",
    COALESCE(au.last_name, au.first_name),
    ?2,
    au.first_name IS NULL,
    au.role_id,
    CASE WHEN au.created_at > ?3 THEN au.email ELSE ?4 END AS email,
    ROW_NUMBER() OVER(ORDER BY au.id) AS "order"
FROM app_user au
```

Parameters:

- **?1:** " "
- **?1:** 7
- **?1:** 2022-12-20T20:07:35.988714
- **?1:** "No email available"

## Example: kQuery, alias

Java code:

```java
final KQuery subQuery =
    k
    .select(count())
    .from(APP_USER_SPECIALTY)
    .innerJoin(APP_USER_SPECIALTY.joinAppUser());

k
.select(subQuery, "countSpecialties")
.select(APP_USER.ID)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    (
        SELECT COUNT(*)
        FROM app_user_specialty aus
        INNER JOIN app_user au ON (aus.app_user_id = au.id)
    ) AS countSpecialties,
    au.id
FROM app_user au
```

Parameters:

- None