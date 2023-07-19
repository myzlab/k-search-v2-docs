---
title: KTuple
sidebar_label: KTuple
---

import K from '@site/src/components/K';

## Definition

A `KTuple` object allows you add tuples to specific parts of an SQL statement.

The syntax of a tuple is as follows:

<p class="text--center">
  (value 1, value 2, ... , value n)
</p>

## Available methods

### 1. `tuple(KBaseColumnCastable... KBaseColumnCastables)`

- **KBaseColumnCastables:** are all the expresions that will be added to the tuple.  
Among the possible values are: [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn), [`Values`](/docs/misc/select-list-values#3-values).

### 2. `tuple(List<Object> list, KTupleFunction kTupleFunction)`

- **list:** which is the list of objects which will be iterate through `kTupleFunction` function to get the list of values which will be added to the tuple.
- **kTupleFunction:** which is a function that will process the `list` of objects received in the previous parameter to obtain the list of values that will be added to the tuple.

To use `tuple` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KBaseColumnCastable...)

Java code:

```java
k
.select(
    APP_USER.ID
)
.from(APP_USER)
.where(
    tuple(APP_USER.FIRST_NAME, APP_USER.EMAIL)
        .notIn(
            tuple(
                tuple(val("Jesus"), val("jesus@gmail.com")),
                tuple(val("kecon"), val("contacto@myzlab.com"))
            )
        )
)
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE (au.first_name, au.email) 
NOT IN (
    (?1, ?2),
    (?3, ?4)
)
```

Parameters:

- **?1:** "Jesus"
- **?2:** "jesus@gmail.com"
- **?3:** "kecon"
- **?4:** "contacto@myzlab.com"

### Example: (List, KTupleFunction)

Java code:

```java
final List<Object> list = new ArrayList<>() {{
    add(
        new HashMap<>() {{
            put("firstName", "Jesus");
            put("email", "jesus@gmail.com");
        }}
    );
    add(
        new HashMap<>(){{
            put("firstName", "kecon");
            put("email", "contacto@myzlab.com");
        }}
    );
}};

k
.select(
    APP_USER.ID
)
.from(APP_USER)
.where(
    tuple(APP_USER.FIRST_NAME, APP_USER.EMAIL)
        .notIn(
            tuple(list,
                (KTupleFunction<Map>) (final Map m) -> new ArrayList() {{
                    add(m.get("firstName"));
                    add(m.get("email"));
                }}
            )
        )
)
.multiple();
```

SQL generated:

```sql
SELECT au.id
FROM app_user au
WHERE (au.first_name, au.email) 
NOT IN (
    (?1, ?2),
    (?3, ?4)
)
```

Parameters:

- **?1:** "Jesus"
- **?2:** "jesus@gmail.com"
- **?3:** "kecon"
- **?4:** "contacto@myzlab.com"