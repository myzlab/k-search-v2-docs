---
title: Or Not
sidebar_label: Or Not
---

## Definition

The `orNot` methods allows you to add the `OR NOT` operator to a `WHERE` clause.

The methods available to use this functionality are:

- `orNot(KCondition kCondition)`: Receives a [`KCondition`](/docs/misc/kcondition/introduction) which will be added to `WHERE` clause with an `OR NOT` operator.
- `orNot(KRaw kRaw)`: Receives a [`KRaw`](/docs/misc/select-list-values#7-kraw) which will be added to `WHERE` clause with an `OR NOT` operator.

## Method hierarchy

The `orNot` method can be used right after the following methods:

- [`where`](/docs/update-statement/where/)
- [`and`](/docs/update-statement/where/and)
- [`andNot`](/docs/update-statement/where/and-not)
- [`or`](/docs/update-statement/where/or)
- [`orNot`](/docs/update-statement/where/or-not)

and the subsequent methods that can be called are:

- [`and`](/docs/update-statement/where/and)
- [`andNot`](/docs/update-statement/where/and-not)
- [`or`](/docs/update-statement/where/or)
- [`orNot`](/docs/update-statement/where/or-not)
- [`returning`](/docs/update-statement/returning)
- [`execute`](/docs/select-statement/select/)

## Example: `KCondition`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, "Jhon")
.where(APP_USER.ID.gt(559))
.orNot(APP_USER.ACTIVE.isTrue())
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id > ?2
OR NOT (au.active IS TRUE)
```

Parameters:

- **?1:** "Jhon"
- **?2:** 559

## Example: `KRaw`

Java code:

```java
k
.update(APP_USER)
.set(APP_USER.FIRST_NAME, "Jhon")
.where(raw("au.id > 559"))
.orNot(raw("au.active IS TRUE"))
.execute();
```

SQL generated:

```sql
UPDATE app_user au
SET first_name = ?1
WHERE au.id > 559
OR NOT (au.active IS TRUE)
```

Parameters:

- **?1:** "Jhon"