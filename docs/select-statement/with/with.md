---
title: With
sidebar_label: With
---

## Definition

The `with` method allows you to add a `WITH` clause to the query.

The only one method available to use this functionality is:

- `with(KCommonTableExpressionFilled... kCommonTableExpressionsFilled)`: Receives a variable quantity of [`KCommonTableExpressionFilled`](/docs/select-statement/with/introduction) that will be added to the `WITH` clause.

## Method hierarchy

The `with` method can be used right after the following methods or objects:

- k

and the subsequent methods that can be called are:

- [`selectDistinctOn`](/docs/select-statement/select/distinct-on)
- [`selectDistinct`](/docs/select-statement/select/distinct)
- [`select1`](/docs/select-statement/select/select1)
- [`select`](/docs/select-statement/select/)
- [`insertInto`](/docs/select-statement/select/)
- [`update`](/docs/select-statement/select/)
- [`deleteFrom`](/docs/select-statement/select/)

## Example

Java code:

```java
final KValues userIdsValues =
    values()
    .append(new ArrayList<>() {{
        add(2L);
    }})
    .append(new ArrayList<>() {{
        add(3L);
    }});
        
final KCommonTableExpressionFilled userIdsCte = 
    cte("user_ids_cte")
    .columns("id")
    .as(userIdsValues, "uic");

k
.with(userIdsCte)
.select(
    boolAnd(
        exists(
            k
            .select1()
            .from(APP_USER)
            .where(APP_USER.ID.eq(userIdsCte.c("id")))
        )
    )
)
.from(userIdsCte)
.single(Boolean.class);
```

SQL generated:

```sql showLineNumbers
WITH user_ids_cte (id) AS (
    VALUES (?1), (?2)
) 
SELECT BOOL_AND (
    EXISTS (
        SELECT ?3
        FROM app_user au
        WHERE au.id = uic.id
    )
) FROM user_ids_cte uic
```

Parameters:

- **?1:** 2
- **?2:** 3
- **?3:** 1