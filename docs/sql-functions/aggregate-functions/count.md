---
title: Count (*)
sidebar_label: Count (*)
---

## Definition

The `count` methods allows you to add a `COUNT(*)` function to the query. 

The `COUNT(*)` function returns the number of rows returned by a [`SELECT`](/docs/select-statement/select/introduction) statement, including NULL and duplicates.

The only one method available to use this functionality is:

- `count()`: It does not receive any parameters.

To use this way, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
k
.select(count())
.from(APP_USER)
.multiple();
```

SQL generated:

```sql
SELECT COUNT(*)
FROM app_user au
```

Parameters:

- None