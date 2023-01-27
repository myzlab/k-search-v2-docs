---
title: INSERT INTO clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`INSERT INTO`](/docs/insert-statement/insert-into/introduction) clause allows you specify the name of the table to which you want to insert one or multiple rows. In Java, we will see a table as the [`KTable`](/docs/update-statement/update/introduction) object.

To fully study the [`INSERT INTO`](/docs/insert-statement/insert-into/introduction) clause, visit its documentation [https://www.postgresql.org/docs/current/sql-insert.html](https://www.postgresql.org/docs/current/sql-insert.html)

## `KTable` types

This clause only accepts one type of [`KTable`](/docs/update-statement/update/introduction):

- Those that are generated automatically and found in the _generated.metadata_ package, which refer directly to a table in the database. [Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)