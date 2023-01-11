---
title: Grouping Sets
sidebar_label: Introduction
---

import K from '@site/src/components/K';

A grouping set is a set of columns by which you group by using the [`GROUP BY`](/docs/select-statement/group-by/introduction) clause. By default, when using the [`GROUP BY`](/docs/select-statement/group-by/introduction) clause, a grouping set is generated with the columns and expressions added.

In the following sections, we will study how to add the [`GROUPING SETS`](/docs/select-statement/group-by/grouping-sets/), [`CUBE`](/docs/select-statement/group-by/grouping-sets/cube), and [`ROLLUP`](/docs/select-statement/group-by/grouping-sets/rollup) subclauses to a query, which will allow us to add more than one grouping set at a time to a query.

Additionally, we will study how to use the [`grouping`](/docs/select-statement/group-by/grouping-sets/grouping) method to know if a column is a member of a grouping set.