---
title: With Recursive
sidebar_label: With Recursive
---

## Definition

The `withRecursive` method allows you to add the `WITH RECURSIVE` clause to the query.

## Available methods

### 1. `with(`[`KCommonTableExpressionFilled...`](/docs/misc/cte) `kCommonTableExpressionsFilled)`

- **kCommonTableExpressionsFilled:** are all _Common Table Expressions_ or _CTEs_ that will be added to the `WITH RECURSIVE` clause.

## Method hierarchy

The `withRecursive` method can be used right after the following methods or objects:

- [`KBuilder`](/docs/get-started/installation/springboot-jdbc#ready-to-use)

and the subsequent methods that can be called are:

- [`selectDistinctOn`](/docs/select-statement/select/distinct-on), [`selectDistinct`](/docs/select-statement/select/distinct), [`select1`](/docs/select-statement/select/select1), [`select`](/docs/select-statement/select/)

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
SELECT
    ptc.id,
    ptc.code,
    ptc.permission_id AS "permissionId"
FROM permission_tree_cte ptc
```

Parameters:

- **?1:** 510