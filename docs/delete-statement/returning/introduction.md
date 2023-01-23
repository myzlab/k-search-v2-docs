---
title: RETURNING clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

The [`DELETE`](/docs/delete-statement/introduction) statement returns the number of rows deleted. It returns zero if the [`DELETE`](/docs/delete-statement/introduction) statement did not delete any row, however, if we want get the deleted row(s), you can use the [`RETURNING`](/docs/delete-statement/returning/introduction) clause, in this sense, the [`RETURNING`](/docs/delete-statement/returning/introduction) clause allows you get the deleted row(s).