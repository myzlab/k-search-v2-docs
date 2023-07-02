---
title: Insert
sidebar_label: Insert
---

## Definition

The `insert` method allows you to insert one (or multiple) new record(s) into a table.

## Available methods

- `insert(T entity)`: Receives an entity that will be inserted as a record into a table.
- `insert(String jdbc, T entity)`: Receives the name of datasource connection to which you need to connect and an entity that will be inserted as a record into a table.
- `insert(T entity, KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives an entity that will be inserted as a record into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression).
- `insert(String jdbc, T entity, KColumnAllowedToReturning... kColumnsAllowedToReturning)`:  Receives the name of datasource connection to which you need to connect, an entity that will be inserted as a record into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression). 
- `insert(List<T> entities)`: Receives multiple entities that will be inserted as records into a table.
- `insert(String jdbc, List<T> entities)`: Receives the name of datasource connection to which you need to connect and multiple entities that will be inserted as records into a table.
- `insert(List<T> entities, KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives multiple entities that will be inserted as records into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression). 
- `insert(String jdbc, List<T> entities, KColumnAllowedToReturning... kColumnsAllowedToReturning)`: Receives the name of datasource connection to which you need to connect, multiple entities that will be inserted as records into a table and a variable quantity of columns and values that will be added to the `RETURNING` clause. Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Columns with alias`](/docs/misc/select-list-values#6-columns-with-alias), [`KRaw`](/docs/misc/select-list-values#7-kraw), [`Case conditional expression`](/docs/misc/select-list-values#8-case-conditional-expression). 

## Example: T

Java code:

```java
final Language language =
    new Language()
        .setName("English");

languageRepository.insert(
    language
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1)
```

Parameters:

- **?1:** "English"

## Example: String, T

Java code:

```java
final Language language =
    new Language()
        .setName("English");

languageRepository.insert(
    K.JDBC_LEGACY,
    language
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1)
```

Parameters:

- **?1:** "English"

## Example: T, KColumnAllowedToReturning...

Java code:

```java
final Language languageToInsert =
    new Language()
        .setName("English");

final Language languageInserted = languageRepository.insert(
    languageToInsert,
    LANGUAGE.ID.noAlias()
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1)
RETURNING id
```

Parameters:

- **?1:** "English"

## Example: String, T, KColumnAllowedToReturning...

Java code:

```java
final Language languageToInsert =
    new Language()
        .setName("English");

final Language languageInserted = languageRepository.insert(
    K.JDBC_LEGACY,
    languageToInsert,
    LANGUAGE.ID.noAlias()
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1)
RETURNING id
```

Parameters:

- **?1:** "English"

## Example: List&lt;T&gt;

Java code:

```java
final Language languageA =
    new Language()
        .setName("English");

final Language languageB =
    new Language()
        .setName("Spanish");

final List<Language> languages = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

languageRepository.insert(
    languages
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1), (?2)
```

Parameters:

- **?1:** "English"
- **?2:** "Spanish"

## Example: String, List&lt;T&gt;

Java code:

```java
final Language languageA =
    new Language()
        .setName("English");

final Language languageB =
    new Language()
        .setName("Spanish");

final List<Language> languages = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

languageRepository.insert(
    K.JDBC_LEGACY,
    languages
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1), (?2)
```

Parameters:

- **?1:** "English"
- **?2:** "Spanish"

## Example: List&lt;T&gt;, KColumnAllowedToReturning...

Java code:

```java
final Language languageA =
    new Language()
        .setName("English");

final Language languageB =
    new Language()
        .setName("Spanish");

List<Language> languagesToInsert = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

final KCollection<Language> languagesInserted = languageRepository.insert(
    languagesToInsert,
    LANGUAGE.ID.noAlias()
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1), (?2)
RETURNING id
```

Parameters:

- **?1:** "English"
- **?2:** "Spanish"

## Example: String, List&lt;T&gt;, KColumnAllowedToReturning...

Java code:

```java
final Language languageA =
    new Language()
        .setName("English");

final Language languageB =
    new Language()
        .setName("Spanish");

List<Language> languagesToInsert = new ArrayList<>() {{
    add(languageA);
    add(languageB);
}};

final KCollection<Language> languagesInserted = languageRepository.insert(
    K.JDBC_LEGACY,
    languagesToInsert,
    LANGUAGE.ID.noAlias()
);
```

SQL generated:

```sql
INSERT INTO language (name)
VALUES (?1), (?2)
RETURNING id
```

Parameters:

- **?1:** "English"
- **?2:** "Spanish"