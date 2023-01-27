---
title: DELETE FROM clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`DELETE FROM`](/docs/delete-statement/delete-from/introduction) clause allows you specify the name of the table from which you want to delete data. In Java, we will see a table as the [`KTable`](/docs/delete-statement/delete-from/introduction#ktable-types) object.

To fully study the [`DELETE FROM`](/docs/delete-statement/delete-from/introduction) clause, visit its documentation [https://www.postgresql.org/docs/current/sql-delete.html](https://www.postgresql.org/docs/current/sql-delete.html)

## `KTable` types

This clause only accepts one type of [`KTable`](/docs/update-statement/update/introduction):

- Those that are generated automatically and found in the _generated.metadata_ package, which refer directly to a table in the database. [Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)