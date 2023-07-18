---
title: KJoinDefinition
sidebar_label: KJoinDefinition
---

import K from '@site/src/components/K';

## Definition

A [`KJoinDefinition`](/docs/misc/kjoindefinition) object contain all necessary information to join two tables in a query.

This object can only be built through the `on` method available on [`KTable`](/docs/misc/ktable) objects and [`KCommonTableExpressionFilled`](/docs/misc/cte) objects:

## Available `on` methods

### 1. `on(`[`KCondition`](/docs/misc/kcondition/introduction) `kCondition)`

This method allows the [`KTable`](/docs/misc/ktable) or the CTE to be added to a `JOIN` clause.

- **kCondition:** which contains all the information about the condition that will be supplied to the `JOIN` clause.

### 2. `on(`[`KRaw`](/docs/misc/select-list-values#7-kraw) `kRaw)`

This method allows the [`KTable`](/docs/misc/ktable) or the CTE to be added to `JOIN` clause.

- **kRaw:** is a raw content which will be supplied in the `JOIN` clause.

:::tip

Those [`KTable`](/docs/misc/ktable) that are automatically generated bring with them additional predefined methods that return a `KJoinDefinition` according to the relationships between tables that are detected in the database diagram.

The syntax of these additional methods is:

<p class="text--center">
  join + TableNameUpperCamelCase
</p>

[Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)

:::

:::tip

The [`KTable`](/docs/misc/ktable) that calls the `on` method will be the one that will be introduced in the join.

:::

## Example: `KCondition`

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    ROLE.TENANT_ID
)
.from(APP_USER)
.innerJoin(ROLE.on(APP_USER.ROLE_ID.eq(ROLE.ID)))
.multiple();
```

SQL generated:

```sql
SELECT au.first_name, ro.tenant_id
FROM app_user au
INNER JOIN role ro ON (au.role_id = ro.id)
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    ROLE.TENANT_ID
)
.from(APP_USER)
.innerJoin(ROLE.on(raw("au.role_id = ro.id")))
.multiple();
```

SQL generated:

```sql
SELECT au.first_name, ro.tenant_id
FROM app_user au
INNER JOIN role ro ON (au.role_id = ro.id)
```

Parameters:

- None

## Example: Predefined method

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    ROLE.TENANT_ID
)
.from(APP_USER)
.innerJoin(APP_USER.joinRole())
.multiple();
```

SQL generated:

```sql
SELECT au.first_name, ro.tenant_id
FROM app_user au
INNER JOIN role ro ON (au.role_id = ro.id)
```

Parameters:

- None
