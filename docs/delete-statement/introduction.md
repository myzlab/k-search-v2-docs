---
title: DELETE statement
sidebar_label: Introduction
---

import K from '@site/src/components/K';

## Definition

The `DELETE` statement allows you to delete rows of a table.

## SQL Syntax

Syntax:

```sql
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE FROM [ ONLY ] table_name [ [ AS ] alias ]
    [ USING from_item [, ...] ]
    [ WHERE condition ]
    [ RETURNING * | output_expression [ [ AS ] output_name ] [, ...] ]
```

To fully study the SQL Select clause, visit its documentation [https://www.postgresql.org/docs/current/sql-delete.html](https://www.postgresql.org/docs/current/sql-delete.html)