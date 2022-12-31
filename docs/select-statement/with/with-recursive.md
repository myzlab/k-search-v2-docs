---
title: With Recursive
sidebar_label: With Recursive
---

## Definition

The `withRecursive` method allows you to add a `WITH RECURSIVE` clause to the query.

The only one method available to use this functionality is:

- `with(KCommonTableExpressionFilled... kCommonTableExpressionsFilled)`: Receives a variable quantity of [`KCommonTableExpressionFilled`](/docs/select-statement/with/introduction) that will be added to the `WITH RECURSIVE` clause.

## Method hierarchy

The `withRecursive` method can be used right after the following methods or objects:

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
final PermissionMetadata PERMISSION_2 = PERMISSION.alias("pe2");
        
final KFrom kQueryUnionTree = 
    k
    .select(PERMISSION_2.ID, PERMISSION_2.CODE, PERMISSION_2.PERMISSION_ID)
    .from(PERMISSION_2)
    .innerJoin(raw("permission_tree_cte ptc2 ON ptc2.id = %s", PERMISSION_2.PERMISSION_ID));

final KQuery kQueryRecursive = 
    k
    .select(PERMISSION.ID, PERMISSION.CODE, PERMISSION.PERMISSION_ID)
    .from(PERMISSION)
    .where(PERMISSION.ID.eq(510))
    .union(kQueryUnionTree);

final KCommonTableExpressionFilled permissionTreeCte =
    cte("permission_tree_cte")
    .as(kQueryRecursive, "ptc");

k
.withRecursive(permissionTreeCte)
.select(
    permissionTreeCte.c("id"),
    permissionTreeCte.c("code"),
    permissionTreeCte.c("permission_id").as("permissionId")
)
.from(permissionTreeCte)
.multiple();
```

SQL generated:

```sql showLineNumbers
WITH RECURSIVE permission_tree_cte AS (
    SELECT pe.id, pe.code, pe.permission_id
    FROM auth.permission pe 
    WHERE pe.id = ?1
    UNION (
        SELECT pe2.id, pe2.code, pe2.permission_id
        FROM auth.permission pe2
        INNER JOIN permission_tree_cte ptc2 ON ptc2.id = pe2.permission_id
    )
)
SELECT
    ptc.id,
    ptc.code,
    ptc.permission_id AS "permissionId"
FROM permission_tree_cte ptc
```

Parameters:

- **?1:** 510