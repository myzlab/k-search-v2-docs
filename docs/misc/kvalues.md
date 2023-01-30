---
title: KValues
sidebar_label: KValues
---

import K from '@site/src/components/K';

## Definition

A `KValues` object allows you to store a set of values that can be assigned to the `VALUES` clause through the [`values`](/docs/insert-statement/values/) method.

The `KValues` object allows you store values to multiple records at same time. To prepare these values you have available the `values` and `append` method:

- `values()`: Allows you to initialize a list of values. It does not receive parameters.
- `append(Object... value)`: Receives the objects which will correspond to the values of one single record. This method can be called as many times as records you need to insert into the table.

To use `values` method, you need to import the static functions as follows:

```java
import static com.myzlab.k.KFunction.*;
```

### Example

Java code:

```java
final KValues values = values()
    .append("Value 1", "R1", 7)
    .append("Value 2", "R2", 8)
    .append("Value 3", "R3", 15)
    .append("Value 4", "R4", 12);
```