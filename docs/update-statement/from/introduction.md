---
title: FROM clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`FROM`](/docs/update-statement/from/introduction) clause allows you emulate update join operations.

To successfully emulate a update joins operations, first, specify the table expression using [`FROM`](/docs/update-statement/from/introduction) clause. It can be one or several tables.
Then, use columns from the tables that appear in the [`FROM`](/docs/update-statement/from/introduction) clause in the [`WHERE`](/docs/update-statement/where/introduction) clause to join data.