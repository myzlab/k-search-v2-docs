---
title: On Conflict
sidebar_label: On Conflict
---

## Definition

The `onConflict` methods allows you to add the `ON CONFLICT` clause to the query.

The only one method available to use this functionality is:

- `onConflict()`: It does not receive parameters.

## Method hierarchy

The `values` method can be used right after the following methods or objects:

- [`select`](/docs/insert-statement/select/)
- [`values`](/docs/insert-statement/values/)

and the subsequent methods that can be called are:

- [`doNothing`](/docs/insert-statement/on-conflict/#1-do-nothing)
- [`targetColumn`](/docs/select-statement/select/)
- [`targetConstraint`](/docs/select-statement/select/)

and once the action for the conflict is defined, the next available methods that can be called are:

- [`returning`](/docs/insert-statement/returning/)
- [`execute`](/docs/select-statement/select/)

There are 5 possible actions to take when the `ON CONFLICT` clause is invoked.

## 1. Do Nothing

To take this action you have available the `doNothing` method:

- `doNothing()`: It does not receive parameters.

### Example

Java code:

```java
final KValues valuesInsert = values()
    .append("name conflicted 3", "es", "-", "backoffice", nullValue())
    .append("Español Test 3", "es", "-", "backoffice", "ABC");

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME, LANGUAGE.FILE, LANGUAGE.FILE_URL, LANGUAGE.PLATFORM_CODE, LANGUAGE.I18N_KEY)
.values(valuesInsert)
.onConflict()
.doNothing()
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file, fileurl, platform_code, i18n_key)
VALUES (?1, ?2, ?3, ?4, NULL), (?5, ?6, ?7, ?8, ?9)
ON CONFLICT DO NOTHING
```

Parameters:

- **?1:** "name conflicted 3"
- **?2:** "es"
- **?3:** "-"
- **?4:** "backoffice"
- **?5:** "Español Test 3"
- **?6:** "es"
- **?7:** "-"
- **?8:** "backoffice"
- **?9:** "ABC"

## 2. Target Columns - Do Nothing

To take this action you have available the `targetColumn` and `doNothing` method:

- `targetColumn(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ON CONFLICT` clause.
- `doNothing()`: It does not receive parameters.

### Example

Java code:

```java
final KValues valuesInsert = values()
    .append("name conflicted 3", "es", "-", "backoffice", nullValue())
    .append("Español Test 3", "es", "-", "backoffice", "ABC");

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME, LANGUAGE.FILE, LANGUAGE.FILE_URL, LANGUAGE.PLATFORM_CODE, LANGUAGE.I18N_KEY)
.values(valuesInsert)
.onConflict()
.targetColumn(LANGUAGE.NAME)
.doNothing()
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file, fileurl, platform_code, i18n_key)
VALUES (?1, ?2, ?3, ?4, NULL), (?5, ?6, ?7, ?8, ?9)
ON CONFLICT (name) DO NOTHING
```

Parameters:

- **?1:** "name conflicted 3"
- **?2:** "es"
- **?3:** "-"
- **?4:** "backoffice"
- **?5:** "Español Test 3"
- **?6:** "es"
- **?7:** "-"
- **?8:** "backoffice"
- **?9:** "ABC"

## 3. Target Constraint - Do Nothing

To take this action you have available the `targetConstraint` and `doNothing` method:

- `targetConstraint(String constraint)`: Receives a constraint name which will be supplied to the `ON CONFLICT` clause.
- `doNothing()`: It does not receive parameters.

### Example

Java code:

```java
final KValues valuesInsert = values()
    .append("name conflicted 3", "es", "-", "backoffice", nullValue())
    .append("Español Test 3", "es", "-", "backoffice", "ABC");

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME, LANGUAGE.FILE, LANGUAGE.FILE_URL, LANGUAGE.PLATFORM_CODE, LANGUAGE.I18N_KEY)
.values(valuesInsert)
.onConflict()
.targetConstraint("pk_language")
.doNothing()
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file, fileurl, platform_code, i18n_key)
VALUES (?1, ?2, ?3, ?4, NULL), (?5, ?6, ?7, ?8, ?9)
ON CONFLICT ON CONSTRAINT "pk_language" DO NOTHING
```

Parameters:

- **?1:** "name conflicted 3"
- **?2:** "es"
- **?3:** "-"
- **?4:** "backoffice"
- **?5:** "Español Test 3"
- **?6:** "es"
- **?7:** "-"
- **?8:** "backoffice"
- **?9:** "ABC"

## 4. Target Columns - Do Update

To take this action you have available the `targetColumn`, `doUpdate` and `set` method:

- `targetColumn(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be supplied to the `ON CONFLICT` clause.
- `doUpdate()`: It does not receive parameters.
- `set(KTableColumn kTableColumn, KColumnAllowedToSetUpdate kColumnAllowedToSetUpdate)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which is the column to modify and receives a column or value which will be assigned to the column. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `set(KTableColumn kTableColumn, KQuery kQuery)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which is the column to modify and receives a KQuery which will be assigned to the column.
- `set(KTableColumn kTableColumn, Object object)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which is the column to modify and receives any object which will be assigned to the column.

When you are resolving a conflict, if you need to pass a column as the new value in the set clause, the current record column can be referenced throug the `tableNameAlias` method or the excluded record column throug the `excluded` method.

There are 2 ways to call these methods:

### 4.1. Calling from a `KTableColumn`

- `excluded()`: It does not receive any parameters. The [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the affected.
- `tableNameAlias()`: It does not receive any parameters. The [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be affected.

### 4.2. Calling from the `KFunction` class

- `excluded(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be the affected.
- `tableNameAlias(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be the affected.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

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
.targetColumn(LANGUAGE.NAME)
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
ON CONFLICT (name)
DO UPDATE
SET name = CONCAT(EXCLUDED.name || ?3 || language.name)
```

Parameters:

- **?1:** "English"
- **?2:** "Spanish"
- **?3:** " "

## 5. Target Constraint - Do Update

To take this action you have available the `targetConstraint`, `doUpdate` and `set` method:

- `targetConstraint(String constraint)`: Receives a constraint name which will be supplied to the `ON CONFLICT` clause.
- `doUpdate()`: It does not receive parameters.
- `set(KTableColumn kTableColumn, KColumnAllowedToSetUpdate kColumnAllowedToSetUpdate)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which is the column to modify and receives a column or value which will be assigned to the column. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values), [`KCondition`](/docs/misc/select-list-values#4-kcondition), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `set(KTableColumn kTableColumn, KQuery kQuery)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which is the column to modify and receives a KQuery which will be assigned to the column.
- `set(KTableColumn kTableColumn, Object object)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which is the column to modify and receives any object which will be assigned to the column.

When you are resolving a conflict, if you need to pass a column as the new value in the set clause, the current record column can be referenced throug the `tableNameAlias` method or the excluded record column throug the `excluded` method.

There are 2 ways to call these methods:

### 4.1. Calling from a `KTableColumn`

- `excluded()`: It does not receive any parameters. The [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be the affected.
- `tableNameAlias()`: It does not receive any parameters. The [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) that invokes the method will be affected.

### 4.2. Calling from the `KFunction` class

- `excluded(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be the affected.
- `tableNameAlias(KTableColumn kTableColumn)`: Receives a [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn) which will be the affected.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

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