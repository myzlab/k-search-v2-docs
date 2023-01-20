---
title: Intersect
sidebar_label: Intersect
---

## Definition

The `intersect` method allows you to add the `INSERSECT` operator to the query.

The only one method available to use this functionality is:

- `intersect(KQueryAllowedToCombining kQueryAllowedToCombining)`: Receives a`KQueryAllowedToCombining` which will be supplied to the `INSERSECT` operator.

## Method hierarchy

The `intersect` method can be used right after the following methods:

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
- [`except`](/docs/select-statement/combining/except)
- [`exceptAll`](/docs/select-statement/combining/except-all)
- [`intersect`](/docs/select-statement/combining/intersect)
- [`intersectAll`](/docs/select-statement/combining/intersect-all)
- [`union`](/docs/select-statement/combining/union)
- [`unionAll`](/docs/select-statement/combining/union-all)

and the subsequent methods that can be called are:

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

## Example

Java code:

```java
final KWhere kQuery1 =
    k
    .select(
        APP_USER.LAST_NAME,
        APP_USER.FIRST_NAME,
        toChar(APP_USER.CREATED_AT, "MM")
    )
    .from(APP_USER)
    .where(toChar(APP_USER.CREATED_AT, "MM").eq("10"))
    .and(cast(toChar(APP_USER.CREATED_AT, "YYYY"), integer()).lt(2022));

k
.select(
    APP_USER.LAST_NAME,
    APP_USER.FIRST_NAME,
    toChar(APP_USER.CREATED_AT, "YYYY")
)
.from(APP_USER)
.where(toChar(APP_USER.CREATED_AT, "YYYY").eq("2022"))
.intersect(kQuery1)
.multiple();
```

SQL generated:

```sql
SELECT
    au.last_name,
    au.first_name,
    TO_CHAR(au.created_at, ?1)
FROM app_user au
WHERE TO_CHAR(au.created_at, ?2) = ?3
INSERSECT (
    SELECT
        au.last_name,
        au.first_name,
        TO_CHAR(au.created_at, ?4)
    FROM app_user au
    WHERE TO_CHAR(au.created_at, ?5) = ?6
    AND CAST(TO_CHAR(au.created_at, ?7) AS INTEGER) < ?8
)
```

Parameters:

- **?1:** "YYYY"
- **?2:** "YYYY"
- **?3:** "2022"
- **?4:** "MM"
- **?5:** "MM"
- **?6:** "10"
- **?7:** "YYYY"
- **?8:** 2022