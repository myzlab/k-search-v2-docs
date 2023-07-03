---
title: Insert Into
sidebar_label: Insert Into
---

## Definition

The `insertInto` methods allows you to add the `INSERT INTO` clause to the query.

## Available methods

- `insertInto(KTable kTable)`: Receives a [`KTable`](/docs/misc/ktable) which will be supplied to the `INSERT INTO` clause. This clause just accepts the type of [`KTable`](/docs/misc/ktable) __Generated__.

## Method hierarchy

The `insertInto` method can be used right after the following methods or objects:

- k, [`with`](/docs/insert-statement/with), [`withRecursive`](/docs/insert-statement/with)

and the subsequent methods that can be called are:

- [`columns`](/docs/insert-statement/columns/)

## Example

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

