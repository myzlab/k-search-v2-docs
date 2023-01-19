---
title: Order By
sidebar_label: Order By
---

## Definition

The `orderBy` method allows you to add the `ORDER BY` clause to the query.

The only one method available to use this functionality is:

- `orderBy(KColumnAllowedToOrderBy... kColumnsAllowedToOrderBy)`: Receives a variable quantity of columns and values that will be added to the [`ORDER BY`](/docs/select-statement/order-by/introduction) clause. Among the possible values are: [`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn), [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn), [`KRaw`](/docs/select-statement/select/introduction#7-kraw).

:::tip

[`KTableColumn`](/docs/select-statement/select/introduction#1-ktablecolumn) and [`KColumn`](/docs/select-statement/select/introduction#2-kcolumn) objects have the `asc` and `desc` methods available to add the `ASC` or `DESC` option respectively.

:::

## Method hierarchy

The `orderBy` method can be used right after the following methods:

- [`selectDistinct`](/docs/select-statement/select/distinct)
- [`select1`](/docs/select-statement/select/select1)
- [`select`](/docs/select-statement/select/)
- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)
- [`where`](/docs/select-statement/where/)
- [`and`](/docs/select-statement/where/and)
- [`andNot`](/docs/select-statement/where/and-not)
- [`or`](/docs/select-statement/where/or)
- [`orNot`](/docs/select-statement/where/or-not)
- [`groupBy`](/docs/select-statement/group-by/)
- [`having`](/docs/select-statement/having/)
- [`and`](/docs/select-statement/having/and)
- [`andNot`](/docs/select-statement/having/and-not)
- [`or`](/docs/select-statement/having/or)
- [`orNot`](/docs/select-statement/having/or-not)
- [`window`](/docs/select-statement/window/)
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)

and the subsequent methods that can be called are:

- [`limit`](/docs/select-statement/select/)
- [`offset`](/docs/select-statement/select/)
- [`fetch`](/docs/select-statement/select/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `KTableColumn`

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    APP_USER.LAST_NAME
)
.from(APP_USER)
.orderBy(APP_USER.ID.desc())
.multiple();
```

SQL generated:

```sql
SELECT au.first_name, au.last_name
FROM app_user au
ORDER BY au.id DESC
```

Parameters:

- None

## Example: `KColumn`

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    APP_USER.LAST_NAME
)
.from(APP_USER)
.orderBy(concat(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).asc())
.multiple();
```

SQL generated:

```sql
SELECT au.first_name, au.last_name
FROM app_user au
ORDER BY CONCAT(au.first_name || ?1 || au.last_name) ASC
```

Parameters:

- **?1:** " "

## Example: `KRaw`

Java code:

```java
k
.select(
    APP_USER.FIRST_NAME,
    APP_USER.LAST_NAME
)
.from(APP_USER)
.orderBy(raw("au.id DESC"))
.multiple();
```

SQL generated:

```sql
SELECT au.first_name, au.last_name
FROM app_user au
ORDER BY au.id DESC
```

Parameters:

- None