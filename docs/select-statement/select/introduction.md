---

---

import K from '@site/src/components/K';

# Introduction

The [`SELECT`](/docs/select-statement/select/introduction) list specifies expressions that form the output rows of the `SELECT` statement.

To fully study the [`SELECT`](/docs/select-statement/select/introduction) list, visit its documentation [https://www.postgresql.org/docs/current/sql-select.html#SQL-SELECT-LIST](https://www.postgresql.org/docs/current/sql-select.html#SQL-SELECT-LIST)

In this introduction, we will show all the possible values that you can use in the [`SELECT`](/docs/select-statement/select/introduction) list to tell <K/> what information we want to query.
All of these possible values can be used together at the same time.

## 1. KTableColumn

They are columns that refer directly to a column in a database table. These columns, as they are not modified, are mapped directly into a [`Mapper`](/docs/data-manipulation/mapper) object if required. Once these columns are altered through any operation, they are automatically discarded for mapping into a [`Mapper`](/docs/data-manipulation/mapper) object.
Add an alias to this type of column does not affect its functionality of being mapped.

This type of columns are found in [`Metadata`](/docs/data-manipulation/metadata) objects

### Example

Java code:

```java
k
.select(
    APP_USER.ID,
    APP_USER.CREATED_AT,
    APP_USER.EMAIL
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.id,
    au.created_at,
    au.email
FROM app_user au
```

Parameters:

- None

## 2. KColumn

These are columns that contain some kind of [`SQL operation`](/docs/sql-functions) and is not possible mapped directly into a [`Mapper`](/docs/data-manipulation/mapper) object.

### Example

Java code:

```java
k
.select(
    coalesce(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME),
    APP_USER.ID.cast(text()),
    toChar(APP_USER.CREATED_AT, "YYYY")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    COALESCE(au.first_name, ?1, au.last_name),
    CAST(au.id AS TEXT),
    TO_CHAR(au.created_at, ?2)
FROM app_user au
```

Parameters:

- **?1:** " "
- **?2:** "YYYY"

## 3. Values

The `val` methods allow introduce a value directly from java code. The values entered through these methods will be parameterized in the SQL query.

The `val` methods available in  <K/> are the following:

- `val(String value)`: Allow to introduce a `String` value.
- `val(Number value)`: Allow to introduce a `Number` value.
- `val(LocalDate value)`: Allow to introduce a `LocalDate` value.
- `val(LocalDateTime value)`: Allow to introduce a `LocalDateTime` value.
- `val(UUID value)`: Allow to introduce a `UUID` value.

### Example

Java code:

```java
k
.select(val(456), val("Name"), val(LocalDate.now()))
.multiple();
```

SQL generated:

```sql
SELECT ?1, ?2, ?3
```

Parameters:

- **?1:** 456
- **?2:** "Name"
- **?3:** 2022-12-23

## 4. KCondition

A condition can be seen as a boolean and can be used directly in the [`SELECT`](/docs/select-statement/select/introduction) list. To learn more about the conditions, please go to the [`KCondition`](/docs/kcondition/introduction) section.

### Example

Java code:

```java
k
.select(APP_USER.ID.gt(2000))
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT au.id > ?1
FROM app_user au
```

Parameters:

- **?1:** 2000

## 5. Columns with over

The `OVER` clause allows you to add **window functions**.

The only one method available to use this functionality is:

- `over(KWindowDefinitionAllowedToOver kWindowDefinitionAllowedToOver)`: Receives a [`KWindowDefinitionAllowedToOver`](/docs/what-is-ksearch) which will be added in the `OVER` clause.

:::caution

OVER clause is not supported directly on a column.

:::

To fully study the **Window Functions**, visit its documentation [https://www.postgresql.org/docs/current/tutorial-window.html](https://www.postgresql.org/docs/current/tutorial-window.html)

### Example

Java code:

 ```java
final KWindowDefinitionUnnamedOrdered wduo = 
    wd()
    .partitionBy(APP_USER.ROLE_ID)
    .orderBy(APP_USER.ID.asc());

k
.select(
    APP_USER.ID,
    rowNumber().over(wduo)
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.id,
    ROW_NUMBER() OVER(PARTITION BY au.role_id ORDER BY au.id ASC)
FROM app_user au
```

Parameters:

- None

## 6. Columns with alias

All of the above options support the ability to add an alias via the `as` method.

- `as(String alias)`: Receive the alias to add to a column or value.

Remember that when adding the alias, this will be the name through which you can manipulate this data in the KRow obtained.

### Example

Java code:

 ```java
k
.select(
    coalesce(APP_USER.FIRST_NAME, val(" "), APP_USER.LAST_NAME).as("fullName"),
    toChar(APP_USER.CREATED_AT, "YYYY").as("year"),
    APP_USER.CREATED_AT.as("createdAt")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    COALESCE(au.first_name, ?1, au.last_name) AS "fullName",
    TO_CHAR(au.created_at, ?2) AS "year",
    au.created_at AS "createdAt"
FROM app_user au
```

Parameters:

- **?1:** " "
- **?2:** "YYYY"

## 7. `KRaw`

The KRaw functionality allows adding any content to the SQL statement without any validation or parameterization. We can do it through the `raw` method.

- `raw(String content, Object... args)`: Receive the content you want to add without validations and without parameterization. If additional arguments are supplied by parameter (args), these will be considered within the same content through the [String.format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html) method call, in this sense, all the rules indicated by the [String.format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html) method must be followed.

The text added each time the `raw` method is executed will be considered as a single column in the SQL statement.

:::danger

Misuse can open SQL injection vulnerabilities in your software. Please be careful.

:::

To use `raw` method, we need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
final String v = "aliasExample";
k
.select(
    raw("au.id AS %s", v),
    raw("COALESCE(au.first_name, ' ', au.last_name)")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    au.id AS aliasExample,
    COALESCE(au.first_name, ' ', au.last_name)
FROM app_user au
```

Parameters:

- None

## 8. `CASE` conditional expression

The SQL `CASE` expression is a generic conditional expression, similar to if/else statements in other programming languages.
To get started with the implementation of a `CASE` conditional expression, we need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

At that point, start by calling the `caseConditional()` method, as follow:

```java
caseConditional()
```

Then we proceed to add the conditions and their results through the `when` and `then` methods.

- `when(KCondition kCondition)`: Receive a condition which will be added in the `WHEN` clause. (To learn more about the conditions, please go to the [`KCondition`](/docs/kcondition/introduction) section).
- `then(KBaseColumnCastable kBaseColumnCastable)`: Receive a column or a value which will be added in the `THEN` clause.
- `then(KRaw kRaw)`: Receives a [`KRaw`](/docs/select-statement/select/introduction#7-kraw) which will be added in the `THEN` clause.

These methods can be called as many conditions as you wish to add, as follow:

```java
.when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7)))
.then(APP_USER.EMAIL)
.when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusMonths(1)))
.then(val("No id available"))
```

Once all the conditions are added, the following corresponds to the `ELSE` clause, which is completely optional.
This method receive a column or a value, as follow:

```java
.elseResult(val(0))
```

```java
.elseResult(APP_USER.UUID.cast(text()))
```

And finally, the alias must be added through the `as` method, as follows:

```java
.as("validIds")
```

### Example

Java code:

```java
k
.select(
    caseConditional()
    .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusDays(7)))
    .then(APP_USER.EMAIL)
    .when(APP_USER.CREATED_AT.gt(LocalDateTime.now().minusMonths(1)))
    .then(val("No id available"))
    .elseResult(APP_USER.UUID.cast(text()))
    .as("validIds")
)
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT
    CASE
    WHEN au.created_at > ?1 THEN au.email
    WHEN au.created_at > ?2 THEN ?3
    ELSE CAST(au.uuid AS TEXT) END
    AS "validIds"
FROM app_user au
```

Parameters:

- **?1:** 2022-12-16T13:13:36.971895
- **?2:** 2022-11-23T13:13:36.973804
- **?3:** "No id available"