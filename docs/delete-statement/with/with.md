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

- [`deleteFrom`](/docs/delete-statement/delete-from/)

## Example

Java code:

```java
final KValues userIdsValues =
    values()
    .append(new ArrayList<>() {{
        add(10605L);
    }})
    .append(new ArrayList<>() {{
        add(13L);
    }});

final KCommonTableExpressionFilled userIdsCte =
    cte("user_ids_cte")
    .columns("id")
    .as(userIdsValues, "uic");

k
.with(userIdsCte)
.deleteFrom(APP_USER)
.using(userIdsCte)
.where(userIdsCte.c("id").eq(APP_USER.ID))
.execute();
```

SQL generated:

```sql
WITH user_ids_cte (id) AS (
    VALUES (?1), (?2)
) 
DELETE FROM app_user au
USING user_ids_cte uic
WHERE uic.id = au.id
```

Parameters:

- **?1:** 10605
- **?2:** 13