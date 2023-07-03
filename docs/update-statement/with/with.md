---
title: With
sidebar_label: With
---

## Definition

The `with` method allows you to add the `WITH` clause to the query.

## Available methods

- `with(KCommonTableExpressionFilled... kCommonTableExpressionsFilled)`: Receives a variable quantity of [`KCommonTableExpressionFilled`](/docs/misc/cte) that will be added to the `WITH` clause.

## Method hierarchy

The `with` method can be used right after the following methods or objects:

- k

and the subsequent method that can be called is:

- [`update`](/docs/update-statement/update/)

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
.update(APP_USER)
.set(APP_USER.FIRST_NAME, APP_USER.LAST_NAME)
.from(userIdsCte)
.where(userIdsCte.c("id").eq(APP_USER.ID))
.execute();
```

SQL generated:

```sql
WITH user_ids_cte (id) AS (
    VALUES (?1), (?2)
) 
UPDATE app_user au
SET first_name = au.last_name
FROM user_ids_cte uic
WHERE uic.id = au.id
```

Parameters:

- **?1:** 10605
- **?2:** 13