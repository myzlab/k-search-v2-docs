---

---

import K from '@site/src/components/K';

# Introduction

Queries can access multiple tables at once, or access the same table in such a way that multiple rows of the table are being processed at the same time. Queries that access multiple tables (or multiple instances of the same table) at one time are called join queries.

To fully study join queries, visit its documentation [https://www.postgresql.org/docs/current/tutorial-join.html](https://www.postgresql.org/docs/current/tutorial-join.html)

In this introduction, we will learn about the [`KJoinDefinition`](/docs/select-statement/clauses/join/introduction#kjoindefinition) object, which is needed to work with joins in Ksearch.

## `KJoinDefinition`

A [`KJoinDefinition`](/docs/select-statement/clauses/join/introduction#kjoindefinition) object contain all necessary information to join two tables in a query.

This object can only be built through the `on` method available on [`KTable`](/docs/select-statement/clauses/from/introduction) objects and [`KCommonTableExpressionFilled`](/docs/select-statement/clauses/with/introduction) objects:

- `on(KCondition kCondition)`: This method allows the [`KTable`](/docs/select-statement/clauses/from/introduction) or the CTE to be added to a join through the condition that is received by parameter. (To learn more about the conditions, please go to the [`KConditions`](/docs/conditions/eq) section).
- `on(KRaw kRaw)`: This method allows the [`KTable`](/docs/select-statement/clauses/from/introduction) or the CTE to be added to a join through the [`KRaw`](/docs/select-statement/clauses/select/introduction#7-kraw) that is received by parameter.

Additionally, those [`KTable`](/docs/select-statement/clauses/from/introduction) that are automatically generated bring with them additional predefined methods that return a [`KJoinDefinition`](/docs/select-statement/clauses/join/introduction#kjoindefinition) according to the relationships between tables that are detected in the database diagram.

The syntax of these additional methods is:

```java
join + "Table name in UpperCamelCase"
```

[Learn how to generate KTable automatically.](/docs/data-manipulation/introduction)

:::tip

The [`KTable`](/docs/select-statement/clauses/from/introduction) that calls the `on` method will be the one that will be introduced in the join.

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
