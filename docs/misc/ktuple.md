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

- `tuple(KBaseColumnCastable... KBaseColumnCastables)`: Receives a variable quantity of [`KTableColumn`](/docs/misc/select-list-values#1-ktablecolumn), [`KColumn`](/docs/misc/select-list-values#2-kcolumn) or [`Values`](/docs/misc/select-list-values#3-values) which will be added to the tuple.
- `tuple(List<Object> list, KTupleFunction kTupleFunction)`: Receives a list which will be iterate through `kTupleFunction` function to get the list of values which will be added to the tuple.

To use `tuple` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example: (KBaseColumnCastable...)

Java code:

```java
tuple(APP_USER.FIRST_NAME, APP_USER.EMAIL)
```

### Example: (List, KTupleFunction)

Java code:

```java
final List<Map<String, Object>> list = new ArrayList<>() {{
    add(
        new HashMap<>() {{
            put("firstName", "Jesus");
            put("email", "jesus@gmail.com");
        }}
    );
    add(
        new HashMap<>(){{
            put("firstName", "kecon");
            put("email", "kecon80105@kembung.com");
        }}
    );
}};

tuple(list,
    (KTupleFunction<Map>) (final Map m) -> new ArrayList() {{
        add(m.get("firstName"));
        add(m.get("email"));
    }}
)
```