---
title: Select Distinct
sidebar_label: Select Distinct
---

## Definition

The `selectDistinct` methods allows you to add a `SELECT` statement with the `DISTINCT` clause to the query.

The methods available to use this functionality are:

- `selectDistinctOn(KColumnAllowedToSelect... kColumnsAllowedToSelect)`: Receives the set of columns and values that will be added to the `SELECT DISTINCT` clause. Among the possible values are: [`KTableColumn`](/docs/select-statement/clauses/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/clauses/select/introduction#2-kcolumn), [`Values`](/docs/select-statement/clauses/select/introduction#3-values), [`KCondition`](/docs/select-statement/clauses/select/introduction#4-kcondition), [`Columns with alias`](/docs/select-statement/clauses/select/introduction#5-columns-with-alias), [`KRaw`](/docs/select-statement/clauses/select/introduction#6-kraw), [`Case conditional expression`](/docs/select-statement/clauses/select/introduction#7-case-conditional-expression).
- `selectDistinctOn(KQuery kQuery, String alias)`: Receives a [`KRaw`](/docs/select-statement/clauses/select/introduction#6-kraw) which will be added in the `DISTINCT ON` clause.

## Method hierarchy

The `select1` method can be used right after the following methods or objects:

- k
- [`with`](/docs/select-statement/clauses/with)
- [`withRecursive`](/docs/select-statement/clauses/with)

and the subsequent methods that can be called are:

- [`select`](/docs/select-statement/clauses/select/)
- [`from`](/docs/select-statement/clauses/select/)
- [`where`](/docs/select-statement/clauses/select/)
- [`groupBy`](/docs/select-statement/clauses/select/)
- [`window`](/docs/select-statement/clauses/select/)
- [`except`](/docs/select-statement/clauses/select/)
- [`exceptAll`](/docs/select-statement/clauses/select/)
- [`intersect`](/docs/select-statement/clauses/select/)
- [`intersectAll`](/docs/select-statement/clauses/select/)
- [`union`](/docs/select-statement/clauses/select/)
- [`unionAll`](/docs/select-statement/clauses/select/)
- [`orderBy`](/docs/select-statement/clauses/select/)
- [`limit`](/docs/select-statement/clauses/select/)
- [`offset`](/docs/select-statement/clauses/select/)
- [`fetch`](/docs/select-statement/clauses/select/)
- [`single`](/docs/select-statement/clauses/select/)
- [`multiple`](/docs/select-statement/clauses/select/)

## Example: KColumnAllowedToSelect...

Java code:

```java
k
// highlight-next-line
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
        .as("email")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT DISTINCT
    au.id,
    CONCAT(au.first_name || ?1 || au.last_name) AS "fullName",
    COALESCE(au.last_name, au.first_name),
    ?2,
    au.first_name IS NULL,
    au.role_id,
    CASE WHEN au.created_at > ?3 THEN au.email ELSE ?4 END AS email
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
// highlight-next-line
.selectDistinct(subQuery, "countSpecialties")
.select(APP_USER.ID)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT DISTINCT
    (
        SELECT COUNT(*)
        FROM auth.app_user_specialty aus
        INNER JOIN auth.app_user au ON (aus.app_user_id = au.id)
    ) AS countSpecialties,
    au.id
FROM app_user au
```

Parameters:

- None