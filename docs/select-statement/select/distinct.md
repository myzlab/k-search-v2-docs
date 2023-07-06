---
title: Select Distinct
sidebar_label: Select Distinct
---

## Definition

The `selectDistinct` methods allows you to add the `SELECT DISTINCT` clause to the query.

## Available methods

### 1. `selectDistinct(KColumnAllowedToSelect... kColumnsAllowedToSelect)`

- **kColumnsAllowedToSelect:** are all the expresions that will be added to the `SELECT DISTINCT` clause.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`Columns with over`](/docs/misc/select-list-values#5-columns-with-over), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

### 2. `selectDistinct(KQuery kQuery, String alias)`

- **kQuery:** is a subquery which will be added to the `SELECT DISTINCT` list and treated as a column.  
- **alias:** which is the alias of the previously mentioned column.

## Method hierarchy

The `selectDistinct` method can be used right after the following methods or objects:

- [`KBuilder`](/docs/get-started/installation/springboot-jdbc#ready-to-use), [`with`](/docs/select-statement/with), [`withRecursive`](/docs/select-statement/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/select/), [`from`](/docs/select-statement/from/), [`where`](/docs/select-statement/where/), [`groupBy`](/docs/select-statement/group-by/), [`window`](/docs/select-statement/window/), [`except`](/docs/select-statement/combining/except), [`exceptAll`](/docs/select-statement/combining/except-all), [`intersect`](/docs/select-statement/combining/intersect), [`intersectAll`](/docs/select-statement/combining/intersect-all), [`union`](/docs/select-statement/combining/union), [`unionAll`](/docs/select-statement/combining/union-all), [`orderBy`](/docs/select-statement/order-by/), [`limit`](/docs/select-statement/limit), [`offset`](/docs/select-statement/offset), [`fetch`](/docs/select-statement/fetch/), [`single`](/docs/select-statement/select/), [`multiple`](/docs/select-statement/select/)

## Example: KColumnAllowedToSelect...

Java code:

```java
k
.selectDistinct(
    APP_USER.ID,
    concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).as("fullName"),
    coalesce(APP_USER.LAST_NAME, APP_USER.FIRST_NAME),
    val(7),
    APP_USER.FIRST_NAME.isNull(),
    raw("au.role_id"),
    caseConditional()
        .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7))).then(APP_USER.EMAIL)
        .elseResult(val("No email available"))
        .end()
        .as("email"),
    rowNumber().over(wd().orderBy(APP_USER.ID)).as("order")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT
    au.id,
    CONCAT(au.first_name || ?1 || au.last_name) AS "fullName",
    COALESCE(au.last_name, au.first_name),
    ?2,
    au.first_name IS NULL,
    au.role_id,
    CASE WHEN au.created_at > ?3 THEN au.email ELSE ?4 END AS "email",
    ROW_NUMBER() OVER(ORDER BY au.id) AS "order"
FROM app_user au
```

Parameters:

- **?1:** " "
- **?2:** 7
- **?3:** 2022-12-20T20:07:35.988714
- **?4:** "No email available"

## Example: kQuery, alias

Java code:

```java
final KQuery subQuery =
    k
    .select(count())
    .from(APP_USER_SPECIALTY)
    .innerJoin(APP_USER_SPECIALTY.joinAppUser());

k
.selectDistinct(subQuery, "countSpecialties")
.select(APP_USER.ID)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT DISTINCT
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