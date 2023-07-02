---
title: Update By Id
sidebar_label: Update By Id
---

## Definition

The `updateById` method allows you to update one (or multiple) new record(s) into a table.

## Available methods

- `updateById(T entity)`: Receives an entity that will allow you update a record into a table.
- `updateById(String jdbc, T entity)`: Receives the name of datasource connection to which you need to connect and an entity that will allow you update a record into a table.
- `updateById(T entity, KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives an entity that will allow you update a record into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `updateById(String jdbc, T entity, KColumnAllowedToReturning... kColumnsAllowedToReturning)`:  Receives the name of datasource connection to which you need to connect, an entity that will allow you update a record into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression). 
- `updateById(List<T> entities)`: Receives multiple entities that will allow you update multiple records into a table.
- `updateById(String jdbc, List<T> entities)`: Receives the name of datasource connection to which you need to connect and multiple entities that will allow you update multiple records into a table.
- `updateById(List<T> entities, KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives multiple entities that will allow you update multiple records into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression). 
- `updateById(String jdbc, List<T> entities, KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives the name of datasource connection to which you need to connect, multiple entities that will allow you update multiple records into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression). 

## Example: T

Java code:

```java
final Language language =
    new Language()
        .setId(1L)
        .setName("English");

languageRepository.updateById(
    language
);
```

SQL generated:

```sql
UPDATE language la 
SET name = ?1
WHERE la.id = ?2
```

Parameters:

- **?1:** "English"
- **?2:** 1

## Example: String, T

Java code:

```java
final Language language =
    new Language()
        .setId(1L)
        .setName("English");

languageRepository.updateById(
    K.JDBC_LEGACY,
    language
);
```

SQL generated:

```sql
UPDATE language la 
SET name = ?1
WHERE la.id = ?2
```

Parameters:

- **?1:** "English"
- **?2:** 1

## Example: T, KColumnAllowedToReturning...

Java code:

```java
final Language languageToUpdate =
    new Language()
        .setId(1L)
        .setName("English");

final Language languageUpdated = languageRepository.updateById(
    languageToUpdate,
    LANGUAGE.PLATFORM_CODE
);
```

SQL generated:

```sql
UPDATE language la
SET name = ?1
WHERE la.id = ?2
RETURNING la.platform_code
```

Parameters:

- **?1:** "English"
- **?2:** 1

## Example: String, T, KColumnAllowedToReturning...

Java code:

```java
final Language languageToUpdate =
    new Language()
        .setId(1L)
        .setName("English");

final Language languageUpdated = languageRepository.updateById(
    K.JDBC_LEGACY,
    languageToUpdate,
    LANGUAGE.PLATFORM_CODE
);
```

SQL generated:

```sql
UPDATE language la
SET name = ?1
WHERE la.id = ?2
RETURNING la.platform_code
```

Parameters:

- **?1:** "English"
- **?2:** 1

## Example: List&lt;T&gt;

Java code:

```java
final Language languageA =
    new Language()
        .setId(1L)
        .setName("English");

final Language languageB =
    new Language()
        .setId(2L)
        .setName("Spanish");

final List<Language> languages = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

languageRepository.updateById(
    languages
);
```

SQL generated:

```sql
WITH _cte (id, name) AS (VALUES (?1, ?2), (?3, ?4))
UPDATE auth.language la
SET name = _.name
FROM _cte _
WHERE la.id = _.id
```

Parameters:

- **?1:** 1
- **?2:** "English"
- **?3:** 2
- **?4:** "Spanish"

## Example: String, List&lt;T&gt;

Java code:

```java
final Language languageA =
    new Language()
        .setId(1L)
        .setName("English");

final Language languageB =
    new Language()
        .setId(2L)
        .setName("Spanish");

final List<Language> languages = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

languageRepository.updateById(
    K.JDBC_LEGACY,
    languages
);
```

SQL generated:

```sql
WITH _cte (id, name) AS (VALUES (?1, ?2), (?3, ?4))
UPDATE auth.language la
SET name = _.name
FROM _cte _
WHERE la.id = _.id
```

Parameters:

- **?1:** 1
- **?2:** "English"
- **?3:** 2
- **?4:** "Spanish"

## Example: List&lt;T&gt;, KColumnAllowedToReturning...

Java code:

```java
final Language languageA =
    new Language()
        .setId(1L)
        .setName("English");

final Language languageB =
    new Language()
        .setId(2L)
        .setName("Spanish");

final List<Language> languages = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

final KCollection<Language> languagesUpdated = languageRepository.updateById(
    languages,
    LANGUAGE.PLATFORM_CODE
);
```

SQL generated:

```sql
WITH _cte (id, name) AS (VALUES (?1, ?2), (?3, ?4))
UPDATE auth.language la
SET name = _.name
FROM _cte _
WHERE la.id = _.id
RETURNING la.platform_code
```

Parameters:

- **?1:** 1
- **?2:** "English"
- **?3:** 2
- **?4:** "Spanish"

## Example: String, List&lt;T&gt;, KColumnAllowedToReturning...

Java code:

```java
final Language languageA =
    new Language()
        .setId(1L)
        .setName("English");

final Language languageB =
    new Language()
        .setId(2L)
        .setName("Spanish");

final List<Language> languages = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

final KCollection<Language> languagesUpdated = languageRepository.updateById(
    K.JDBC_LEGACY,
    languages,
    LANGUAGE.PLATFORM_CODE
);
```

SQL generated:

```sql
WITH _cte (id, name) AS (VALUES (?1, ?2), (?3, ?4))
UPDATE auth.language la
SET name = _.name
FROM _cte _
WHERE la.id = _.id
RETURNING la.platform_code
```

Parameters:

- **?1:** 1
- **?2:** "English"
- **?3:** 2
- **?4:** "Spanish"