---
title: Left Join
sidebar_label: Left Join
---

## Definition

The `leftJoin` method allows you to add a `LEFT JOIN` clause to the query.

The methods available to use this functionality are:

- `leftJoin(KJoinDefinition kJoinDefinition)`: Receives a [`KJoinDefinition`](/docs/select-statement/clauses/join/introduction#kjoindefinition) which will be added to `LEFT JOIN` clause.
- `leftJoin(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/clauses/select/introduction#7-kraw) which will be added to `LEFT JOIN` clause.

## Method hierarchy

The `leftJoin` method can be used right after the following methods or objects:

- [`from`](/docs/select-statement/clauses/from/)
- [`innerJoin`](/docs/select-statement/clauses/join/inner-join)
- [`leftJoin`](/docs/select-statement/clauses/join/left-join)
- [`rightJoin`](/docs/select-statement/clauses/join/right-join)
- [`fullJoin`](/docs/select-statement/clauses/join/full-join)
- [`crossJoin`](/docs/select-statement/clauses/join/cross-join)

and the subsequent methods that can be called are:

- [`from`](/docs/select-statement/clauses/from/)
- [`innerJoin`](/docs/select-statement/clauses/join/inner-join)
- [`leftJoin`](/docs/select-statement/clauses/join/left-join)
- [`rightJoin`](/docs/select-statement/clauses/join/right-join)
- [`fullJoin`](/docs/select-statement/clauses/join/full-join)
- [`crossJoin`](/docs/select-statement/clauses/join/cross-join)
- [`where`](/docs/select-statement/clauses/select/)
- [`groupBy`](/docs/select-statement/clauses/select/)
- [`window`](/docs/select-statement/clauses/select/)
- [`except`](/docs/select-statement/clauses/select/)
- [`exceptAll`](/docs/select-statement/clauses/select/)
- [`intersect`](/docs/select-statement/clauses/select/)
- [`intersectAll`](/docs/select-statement/clauses/select/)
- [`union`](/docs/select-statement/clauses/select/)
- [`unionAll`](/docs/select-statement/clauses/select/)
- [`orderBy`](/docs/select-statement/clauses/select/)
- [`limit`](/docs/select-statement/clauses/select/)
- [`offset`](/docs/select-statement/clauses/select/)
- [`fetch`](/docs/select-statement/clauses/select/)
- [`single`](/docs/select-statement/clauses/select/)
- [`multiple`](/docs/select-statement/clauses/select/)

## Example: `KCondition`

Java code:

```java
k
.select(APP_USER.EMAIL, ROLE.NAME)
.from(APP_USER)
.leftJoin(
    ROLE.on(
        APP_USER.ROLE_ID.eq(ROLE.ID).and(ROLE.TENANT_ID.isNull())
    )
)
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.email, ro.name
FROM app_user au
LEFT JOIN role ro ON (
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
.leftJoin(raw("role ro ON (au.role_id = ro.id AND ro.id < 10)"))
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.email, ro.name
FROM app_user au
LEFT JOIN role ro ON (
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
.leftJoin(APP_USER.joinRole())
.multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.email, ro.name
FROM app_user au
LEFT JOIN role ro ON (au.role_id = ro.id)
```

Parameters:

- None