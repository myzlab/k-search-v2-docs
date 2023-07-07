---
title: On Conflict
sidebar_label: On Conflict
---

## Definition

The `onConflict` methods allows you to add the `ON CONFLICT` clause to the query.

## Available methods

### 1. `onConflict()`

- It does not receive parameters.

## Method hierarchy

The `values` method can be used right after the following methods or objects:

- [`select`](/docs/insert-statement/select/), [`values`](/docs/insert-statement/values/)

and the subsequent methods that can be called are:

- [`doNothing`](/docs/insert-statement/on-conflict/#1-do-nothing), [`targetColumn`](/docs/select-statement/select/), [`targetConstraint`](/docs/select-statement/select/)

and once the action for the conflict is defined, the next available methods that can be called are:

- [`returning`](/docs/insert-statement/returning/), [`execute`](/docs/select-statement/select/)

## Possible actions to take

There are 5 possible actions to take when the `ON CONFLICT` clause is invoked

- [Do Nothing](/docs/insert-statement/on-conflict/actions/do-nothing)
- [Target Column - Do Nothing](/docs/insert-statement/on-conflict/actions/target-column-do-nothing)
- [Target Constraint - Do Nothing](/docs/insert-statement/on-conflict/actions/target-constraint-do-nothing)
- [Target Column - Do Update](/docs/insert-statement/on-conflict/actions/target-column-do-update)
- [Target Constraint - Do Update](/docs/insert-statement/on-conflict/actions/target-constraint-do-update)