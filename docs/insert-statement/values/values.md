---
title: Values
sidebar_label: Values
---

## Definition

The `values` methods allows you to add the `VALUES` clause to the query.

## Available methods

### 1. `values(`[`KValues`](/docs/misc/kvalues) `kValues)`

- **kValues:** are all the values that will be supplied to the `VALUES` clause.  
Among the possible values are: Numeric values, boolean values, date values, string values, char values, uuid values, [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn) [`KRaw`](/docs/misc/select-list-values#7-kraw).

## Method hierarchy

The `values` method can be used right after the following methods or objects:

- [`columns`](/docs/insert-statement/columns/)

and the subsequent methods that can be called are:

- [`onConflict`](/docs/select-statement/select/), [`returning`](/docs/insert-statement/returning/), [`execute`](/docs/select-statement/select/)

## Example: Fixed records

Java code:

```java
final KValues user = values()
    .append("contacto@myzlab.com", crypt("my-password"))
    .append("no-pass@yopmail.com", null);

k
.insertInto(APP_USER)
.columns(
    APP_USER.EMAIL,
    APP_USER.PASSWORD
)
.values(user)
.execute();

```

SQL generated:

```sql
INSERT INTO app_user (email, password)
VALUES 
(?1, CRYPT(?2, GEN_SALT(?3))), 
(?4, NULL)
```

Parameters:

- **?1:** "contacto@myzlab.com"
- **?2:** "my-password"
- **?3:** "bf"
- **?4:** "no-pass@yopmail.com"

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