---
title: USING clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`USING`](/docs/delete-statement/using/introduction) clause allows you emulate delete join operations.

To successfully emulate a delete joins operations, first, specify the table expression using [`USING`](/docs/delete-statement/using/introduction) clause. It can be one or several tables.
Then, use columns from the tables that appear in the [`USING`](/docs/delete-statement/using/introduction) clause in the [`WHERE`](/docs/delete-statement/where/introduction) clause to join data.