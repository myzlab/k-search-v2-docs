---
title: With Recursive
sidebar_label: With Recursive
---

## Definition

The `withRecursive` method allows you to add the `WITH RECURSIVE` clause to the query.

The only one method available to use this functionality is:

- `with(KCommonTableExpressionFilled... kCommonTableExpressionsFilled)`: Receives a variable quantity of [`KCommonTableExpressionFilled`](/docs/misc/cte) that will be added to the `WITH RECURSIVE` clause.

## Method hierarchy

The `withRecursive` method can be used right after the following methods or objects:

- k

and the subsequent method that can be called is:

- [`deleteFrom`](/docs/delete-statement/delete-from/)

## Example

Java code:

```java
final PermissionMetadata PERMISSION_2 = PERMISSION.alias("pe2");
        
final KFrom kQueryUnionTree = 
    k
    .select(PERMISSION_2.ID)
    .from(PERMISSION_2)
    .innerJoin(raw("permission_tree_cte ptc2 ON ptc2.id = %s", PERMISSION_2.PERMISSION_ID));

final KGenericQuery kQueryRecursive = 
    k
    .select(PERMISSION.ID)
    .from(PERMISSION)
    .where(PERMISSION.ID.eq(14L))
    .union(kQueryUnionTree);

final KCommonTableExpressionFilled permissionTreeCte =
    cte("permission_tree_cte")
    .as(kQueryRecursive, "ptc");

k
.withRecursive(permissionTreeCte)
.deleteFrom(PERMISSION)
.using(permissionTreeCte)
.where(permissionTreeCte.c("id").eq(PERMISSION.ID))
.execute();
```

SQL generated:

```sql
WITH RECURSIVE permission_tree_cte AS (
    SELECT pe.id
    FROM permission pe
    WHERE pe.id = ?1
    UNION (
        SELECT pe2.id
        FROM permission pe2
        INNER JOIN permission_tree_cte ptc2 ON ptc2.id = pe2.permission_id
    )
)
DELETE FROM permission pe
USING permission_tree_cte ptc
WHERE ptc.id = pe.id
```

Parameters:

- **?1:** 14