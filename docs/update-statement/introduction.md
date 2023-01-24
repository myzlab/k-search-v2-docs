---
title: UPDATE statement
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The `UPDATE` statement allows you to modify data in a table.

Syntax of a `UPDATE` statement:

Syntax:

```sql
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    SET { column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = [ ROW ] ( { expression | DEFAULT } [, ...] ) |
          ( column_name [, ...] ) = ( sub-SELECT )
        } [, ...]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ RETURNING * | output_expression [ [ AS ] output_name ] [, ...] ]
```

To fully study the SQL Select clause, visit its documentation [https://www.postgresql.org/docs/current/sql-update.html](https://www.postgresql.org/docs/current/sql-update.html)