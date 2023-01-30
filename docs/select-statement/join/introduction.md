---
title: JOIN clause
sidebar_label: Introduction
---

import K from '@site/src/components/K';

Queries can access multiple tables at once, or access the same table in such a way that multiple rows of the table are being processed at the same time. Queries that access multiple tables (or multiple instances of the same table) at one time are called join queries.

To fully study join queries, visit its documentation [https://www.postgresql.org/docs/current/tutorial-join.html](https://www.postgresql.org/docs/current/tutorial-join.html)

In this introduction, you will learn about the [`KJoinDefinition`](/docs/select-statement/join/introduction#kjoindefinition) object, which is needed to work with joins in Ksearch.

## `KJoinDefinition`

A [`KJoinDefinition`](/docs/select-statement/join/introduction#kjoindefinition) object contain all necessary information to join two tables in a query.

This object can only be built through the `on` method available on [`KTable`](/docs/misc/ktable) objects and [`KCommonTableExpressionFilled`](/docs/misc/cte) objects:

- `on(KCondition kCondition)`: This method allows the [`KTable`](/docs/misc/ktable) or the CTE to be added to a join through the [`KCondition`](/docs/misc/kcondition/introduction) that is received by parameter.
- `on(KRaw kRaw)`: This method allows the [`KTable`](/docs/misc/ktable) or the CTE to be added to a join through the [`KRaw`](/docs/misc/select-list-values#7-kraw) that is received by parameter.

Additionally, those [`KTable`](/docs/misc/ktable) that are automatically generated bring with them additional predefined methods that return a [`KJoinDefinition`](/docs/select-statement/join/introduction#kjoindefinition) according to the relationships between tables that are detected in the database diagram.

The syntax of these additional methods is:

<p class="text--center">
  join + TableNameUpperCamelCase
</p>

[Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)

:::tip

The [`KTable`](/docs/misc/ktable) that calls the `on` method will be the one that will be introduced in the join.

:::

## Example: `KCondition`

Java code:

```java
APP_USER.on(APP_USER.ROLE_ID.eq(ROLE.ID))
```

## Example: `KRaw`

Java code:

```java
APP_USER.on(raw("au.role_id = ro.id"))
```

## Example: Predefined method

Java code:

```java
APP_USER.joinRole()
```
