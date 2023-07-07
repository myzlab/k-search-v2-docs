---
title: Target Constraint - Do Update
sidebar_label: Target Constraint - Do Update
---

## Definition

This action indicates that an update should be performed when a conflict occurs on a specific constraint.

## Available methods

### 1. `targetConstraint(String constraint)`

- **constraint:** the name of constraint where the conflict must occur.

### 2. `doUpdate()`

- It does not receive parameters.

### 3. `set(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn, KColumnAllowedToSetUpdate kColumnAllowedToSetUpdate)`

- **kTableColumn:** is the column that will be updated.
- **kColumnAllowedToSetUpdate:** is the expression whose result will be assigned to the column.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).

### 4. `set(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn, KQuery kQuery)`

- **kTableColumn:** is the column that will be updated.
- **kQuery:** is a subquery whose result will be assigned to the column.

### 5. `set(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn, Object object)`

- **kTableColumn:** is the column that will be updated.
- **object:** is the value that will be assigned to the column.  
Among the possible values are: `Number`, `String`, `LocalDate`, `LocalDateTime`, `UUID`.

:::info

To make use of this action, you must call the `targetConstraint`, `doUpdate` and `set` methods (in this order) right after the [`onConflict`](/docs/insert-statement/on-conflict) method.

:::

:::tip

The `set` method can be called as many times as columns you need to update.

:::

## How to reference the _current_ and the _excluded_ record in a `set` method?

When you are resolving a conflict, if you need to pass a column as the new value in the set clause, the current record column can be referenced throug the `useTableNameAsAlias` method and the excluded record column throug the `excluded` method.

## Calling `useTableNameAsAlias` and `excluded` from a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn)

### 1. `excluded()`

It does not receive any parameters.

### 2. `useTableNameAsAlias()`

It does not receive any parameters.

:::info

In both methods, the [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the affected.

:::

## Calling `useTableNameAsAlias` and `excluded` from the `KFunction` class

### 1. `excluded(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn)`

- **kTableColumn:** is the column that will be the affected.

### 2. `useTableNameAsAlias(`[`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) `kTableColumn)`

- **kTableColumn:** is the column that will be the affected.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

## Example

Java code:

```java
final KValues valuesInsert = values()
    .append("English")
    .append("Spanish");

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME)
.values(valuesInsert)
.onConflict()
.targetConstraint("pk_language")
.doUpdate()
.set(
    LANGUAGE.NAME, 
    concat(
        excluded(LANGUAGE.NAME),
        val(" "),
        tableNameAlias(LANGUAGE.NAME)
    )
)
.execute();
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1), (?2)
ON CONFLICT ON CONSTRAINT "pk_language"
DO UPDATE
SET name = CONCAT(EXCLUDED.name || ?3 || language.name)
```
Parameters:

- **?1:** "English"
- **?2:** "Spanish"
- **?3:** " "