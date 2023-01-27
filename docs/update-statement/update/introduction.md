---
title: UPDATE clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`UPDATE`](/docs/delete-statement/delete-from/introduction) clause allows you specify the name of the table from which you want to modify data. In Java, we will see a table as the [`KTable`](/docs/update-statement/update/introduction) object.

To fully study the [`UPDATE`](/docs/delete-statement/delete-from/introduction) clause, visit its documentation [https://www.postgresql.org/docs/current/sql-update.html](https://www.postgresql.org/docs/current/sql-update.html)

## `KTable` types

This clause only accepts one type of [`KTable`](/docs/update-statement/update/introduction):

- Those that are generated automatically and found in the _generated.metadata_ package, which refer directly to a table in the database. [Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)