---
title: Right Join
sidebar_label: Right Join
---

## Definition

The `rightJoin` method allows you to add the `RIGHT JOIN` clause to the query.

The methods available to use this functionality are:

- `rightJoin(KJoinDefinition kJoinDefinition)`: Receives a [`KJoinDefinition`](/docs/misc/kjoindefinition) which will be added to `RIGHT JOIN` clause.
- `rightJoin(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `RIGHT JOIN` clause.

## Method hierarchy

The `rightJoin` method can be used right after the following methods or objects:

- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)

and the subsequent methods that can be called are:

- [`from`](/docs/select-statement/from/)
- [`innerJoin`](/docs/select-statement/join/inner-join)
- [`leftJoin`](/docs/select-statement/join/left-join)
- [`rightJoin`](/docs/select-statement/join/right-join)
- [`fullJoin`](/docs/select-statement/join/full-join)
- [`crossJoin`](/docs/select-statement/join/cross-join)
- [`where`](/docs/select-statement/where/)
- [`groupBy`](/docs/select-statement/group-by/)
- [`window`](/docs/select-statement/window/)
- [`except`](/docs/select-statement/combining/except)
- [`exceptAll`](/docs/select-statement/combining/except-all)
- [`intersect`](/docs/select-statement/combining/intersect)
- [`intersectAll`](/docs/select-statement/combining/intersect-all)
- [`union`](/docs/select-statement/combining/union)
- [`unionAll`](/docs/select-statement/combining/union-all)
- [`orderBy`](/docs/select-statement/order-by/)
- [`limit`](/docs/select-statement/limit)
- [`offset`](/docs/select-statement/offset)
- [`fetch`](/docs/select-statement/fetch/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.select(APP_USER.EMAIL, ROLE.NAME)
.from(APP_USER)
.rightJoin(
    ROLE.on(
        APP_USER.ROLE_ID.eq(ROLE.ID).and(ROLE.TENANT_ID.isNull())
    )
)
.multiple();
```

SQL generated:

```sql
SELECT au.email, ro.name
FROM app_user au
RIGHT JOIN role ro ON (
    au.role_id = ro.id AND ro.tenant_id IS NULL
)
```

Parameters:

- None

## Example: `KRaw`

Java code:

```java
k
.select(APP_USER.EMAIL, raw("ro.name"))
.from(APP_USER)
.rightJoin(raw("role ro ON (au.role_id = ro.id AND ro.id < 10)"))
.multiple();
```

SQL generated:

```sql
SELECT au.email, ro.name
FROM app_user au
RIGHT JOIN role ro ON (
    au.role_id = ro.id AND ro.id < 10
)
```

Parameters:

- None

## Example: Predefined method

Java code:

```java
k
.select(APP_USER.EMAIL, ROLE.NAME)
.from(APP_USER)
.rightJoin(APP_USER.joinRole())
.multiple();
```

SQL generated:

```sql
SELECT au.email, ro.name
FROM app_user au
RIGHT JOIN role ro ON (au.role_id = ro.id)
```

Parameters:

- None