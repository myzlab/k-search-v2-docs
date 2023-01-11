---
title: Inner Join
sidebar_label: Inner Join
---

## Definition

The `innerJoin` method allows you to add a `INNER JOIN` clause to the query.

The methods available to use this functionality are:

- `innerJoin(KJoinDefinition kJoinDefinition)`: Receives a [`KJoinDefinition`](/docs/select-statement/join/introduction#kjoindefinition) which will be added to `INNER JOIN` clause.
- `innerJoin(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added to `INNER JOIN` clause.

## Method hierarchy

The `innerJoin` method can be used right after the following methods or objects:

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
- [`window`](/docs/select-statement/select/)
- [`except`](/docs/select-statement/select/)
- [`exceptAll`](/docs/select-statement/select/)
- [`intersect`](/docs/select-statement/select/)
- [`intersectAll`](/docs/select-statement/select/)
- [`union`](/docs/select-statement/select/)
- [`unionAll`](/docs/select-statement/select/)
- [`orderBy`](/docs/select-statement/select/)
- [`limit`](/docs/select-statement/select/)
- [`offset`](/docs/select-statement/select/)
- [`fetch`](/docs/select-statement/select/)
- [`single`](/docs/select-statement/select/)
- [`multiple`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.select(APP_USER.EMAIL, ROLE.NAME)
.from(APP_USER)
.innerJoin(
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
INNER JOIN role ro ON (
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
.innerJoin(raw("role ro ON (au.role_id = ro.id AND ro.id < 10)"))
.multiple();
```

SQL generated:

```sql
SELECT au.email, ro.name
FROM app_user au
INNER JOIN role ro ON (
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
.innerJoin(APP_USER.joinRole())
.multiple();
```

SQL generated:

```sql
SELECT au.email, ro.name
FROM app_user au
INNER JOIN role ro ON (au.role_id = ro.id)
```

Parameters:

- None