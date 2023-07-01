---
title: Values
sidebar_label: Values
---

## Definition

The `values` methods allows you to add the `VALUES` clause to the query.

The only one method available to use this functionality is:

- `values(KValues kValues)`: Receives a [`KValues`](/docs/misc/kvalues) which will be supplied to the `VALUES` clause.

## Method hierarchy

The `values` method can be used right after the following methods or objects:

- [`columns`](/docs/insert-statement/columns/)

and the subsequent methods that can be called are:

- [`onConflict`](/docs/select-statement/select/), [`returning`](/docs/insert-statement/returning/), [`execute`](/docs/select-statement/select/)

## Example: Fixed records

Java code:

```java
final KValues languages = values()
    .append("Language 1", "File 1")
    .append("Language 2", "File 2");

k
.insertInto(LANGUAGE)
.columns(LANGUAGE.NAME, LANGUAGE.FILE)
.values(languages)
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file)
VALUES (?1, ?2), (?3, ?4)
```

Parameters:

- **?1:** "Language 1"
- **?2:** "File 1"
- **?3:** "Language 2"
- **?4:** "File 2"

## Example: Variable records

Java code:

```java
final List<Language> languages = ...;

final KValues values = values().append(languages,
    (KValuesFunction<Language>) (final Language l) -> new ArrayList() {{
        add(l.getName());
        add(l.getFile());
    }}
);

k
.insertInto(LANGUAGE)
.columns(
    LANGUAGE.NAME,
    LANGUAGE.FILE
)
.values(values)
.execute();
```

SQL generated:

```sql
INSERT INTO language (name, file)
VALUES (?1, ?2), (?3, ?4)
```

Parameters:

- **?1:** "Language 1"
- **?2:** "File 1"
- **?3:** "Language 2"
- **?4:** "File 2"