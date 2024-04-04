---
title: Assert Not Exists By Ids
sidebar_label: Assert Not Exists By Ids
---

## Definition

The `assertNotExistsByIds` method allows you to confirm that multiple record not exists in a table at the same time, filtered by its primary key. If at least one record does exist, this method throws a KException.

## Available methods

- `assertNotExistsByIds(List<Y> ids, HttpStatus httpStatus, String message)`: Receives multiple primary keys value and the HttpStatus and message to throw.
- `assertNotExistsByIds(List<Y> ids, KAssertExistsFunction<KWhere, KQuery> kAssertExistsFunction, HttpStatus httpStatus, String message)`: Receives multiple primary keys value, a `KAssertExistsFunction` that allows adding new conditions to the base query and the HttpStatus and message to throw.
- `assertNotExistsByIds(String jdbc, List<Y> ids, KAssertExistsFunction<KWhere, KQuery> kAssertExistsFunction, HttpStatus httpStatus, String message)`: Receives the name of datasource connection to which you need to connect, multiple primary keys value, a `KAssertExistsFunction` that allows adding new conditions to the base query and the HttpStatus and message to throw.

## Example: List&lt;Y&gt;, HttpStatus, String

Java code:

```java
final List<Long> ids = new ArrayList<>();
ids.add(199L);
ids.add(997L);

languageRepository.assertNotExistsByIds(
    ids,
    HttpStatus.BAD_REQUEST,
    "At least one language does exist!"
);

```

SQL generated:

```sql
WITH cte_ (id) AS (
    VALUES (?1), (?2)
)
SELECT
    BOOL_AND(
        NOT EXISTS (
            SELECT ?3
            FROM auth.language_ la
            WHERE la.id = _🕆_JESUS_SAVES_🕆_.id
        )
    )
FROM cte_ _🕆_JESUS_SAVES_🕆_
```

Parameters:

- **?1:** 199
- **?2:** 997
- **?3:** 1

## Example: List&lt;Y&gt;, KAssertExistsFunction, HttpStatus, String

Java code:

```java
final List<Long> ids = new ArrayList<>();
ids.add(199L);
ids.add(997L);

languageRepository.assertNotExistsByIds(
    ids,
    (KWhere kWhere) ->
        kWhere
            .and(LANGUAGE.ACTIVE.isTrue()),
    HttpStatus.BAD_REQUEST,
    "At least one language does exist!"
);

```

SQL generated:

```sql
WITH cte_ (id) AS (
    VALUES (?1), (?2)
)
SELECT
    BOOL_AND(
        NOT EXISTS (
            SELECT ?3
            FROM auth.language_ la
            WHERE la.id = _🕆_JESUS_SAVES_🕆_.id
            AND la.active IS TRUE
        )
    )
FROM cte_ _🕆_JESUS_SAVES_🕆_
```

Parameters:

- **?1:** 199
- **?2:** 997
- **?3:** 1

## Example: String, List&lt;Y&gt;, KAssertExistsFunction, HttpStatus, String

Java code:

```java
final List<Long> ids = new ArrayList<>();
ids.add(199L);
ids.add(997L);

languageRepository.assertNotExistsByIds(
    K.JDBC_LEGACY,
    ids,
    (KWhere kWhere) ->
        kWhere
            .and(LANGUAGE.ACTIVE.isTrue()),
    HttpStatus.BAD_REQUEST,
    "At least one language does exist!"
);

```

SQL generated:

```sql
WITH cte_ (id) AS (
    VALUES (?1), (?2)
)
SELECT
    BOOL_AND(
        NOT EXISTS (
            SELECT ?3
            FROM auth.language_ la
            WHERE la.id = _🕆_JESUS_SAVES_🕆_.id
            AND la.active IS TRUE
        )
    )
FROM cte_ _🕆_JESUS_SAVES_🕆_
```

Parameters:

- **?1:** 199
- **?2:** 997
- **?3:** 1