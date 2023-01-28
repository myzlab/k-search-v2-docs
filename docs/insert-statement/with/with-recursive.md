---
title: With Recursive
sidebar_label: With Recursive
---

## Definition

The `withRecursive` method allows you to add the `WITH RECURSIVE` clause to the query.

The only one method available to use this functionality is:

- `with(KCommonTableExpressionFilled... kCommonTableExpressionsFilled)`: Receives a variable quantity of [`KCommonTableExpressionFilled`](/docs/select-statement/with/introduction) that will be added to the `WITH RECURSIVE` clause.

## Method hierarchy

The `withRecursive` method can be used right after the following methods or objects:

- k

and the subsequent method that can be called is:

- [`insertInto`](/docs/insert-statement/insert-into/)

## Example

Java code:

```java
final PermissionMetadata PERMISSION_2 = PERMISSION.alias("pe2");

final KFrom kQueryUnionTree = 
    k
    .select(PERMISSION_2.ID, PERMISSION_2.CODE, PERMISSION_2.PERMISSION_ID)
    .from(PERMISSION_2)
    .innerJoin(raw("permission_tree_cte ptc2 ON ptc2.id = %s", PERMISSION_2.PERMISSION_ID));

final KGenericQuery kQueryRecursive = 
    k
    .select(PERMISSION.ID, PERMISSION.CODE, PERMISSION.PERMISSION_ID)
    .from(PERMISSION)
    .where(PERMISSION.ID.eq(510L))
    .union(kQueryUnionTree);

final KCommonTableExpressionFilled permissionTreeCte =
    cte("permission_tree_cte")
    .as(kQueryRecursive, "ptc");

final KQuery subQueryInsert = 
    k
    .select(permissionTreeCte.c("code"), permissionTreeCte.c("permission_id"))
    .from(permissionTreeCte);

k
.withRecursive(permissionTreeCte)
.insertInto(PERMISSION)
.columns(PERMISSION.CODE, PERMISSION.PERMISSION_ID)
.select(subQueryInsert)
.execute();
```

SQL generated:

```sql
WITH RECURSIVE permission_tree_cte AS (
    SELECT pe.id, pe.code, pe.permission_id
    FROM permission pe
    WHERE pe.id = ?1
    UNION (
        SELECT pe2.id, pe2.code, pe2.permission_id
        FROM permission pe2
        INNER JOIN permission_tree_cte ptc2 ON ptc2.id = pe2.permission_id
    )
)
INSERT INTO permission (code, permission_id)
SELECT ptc.code, ptc.permission_id
FROM permission_tree_cte ptc
```

Parameters:

- **?1:** 510