---
title: JOIN clause
sidebar_label: Join
---

In this section you will learn how to implement the `JOIN` clause of PostgreSQL through the **_KSearch_** library.

## JOIN clause

The PostgreSQL JOIN clause allows you to join columns from one or more tables based on the values of common columns between related tables. Common columns are typically the primary key columns from the first table and the foreign key columns from the second table.

To make use of this clause, the following methods are available:

## 1. join (c1, c2) methods

The join (c1, c2) methods allow adding a JOIN (LEFT, RIGTH, INNER) between a previously existing table in the SQL statement against a new table supplied by parameter, through only two columns in a single condition. The syntax of this type of method is given as follows:

- left | right | inner + Join(String table, String c1, String c2)

where:

- **table**: Name of the new table to be added in the JOIN.
- **c1**: Name of the first column to be added to the JOIN condition.
- **c2**: Name of the second column to be added to the JOIN condition.

### Examples

**Example 1**: Find the id, name and gender of all the doctors that were created in the year 2019.

Java code:

```java showLineNumbers
K.
table("app_user au").
innerJoin("doctor d", "d.app_user_id", "au.id").
select(
    "d.id",
    "CONCAT(au.name, ' ', au.last_name) AS name",
    "d.gender"
).
whereYear("au.created_at", 2019).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT d.id, CONCAT(au.name, ' ', au.last_name) AS name, d.gender
FROM app_user au
INNER JOIN doctor d ON d.app_user_id = au.id
WHERE EXTRACT( YEAR FROM au.created_at ) = ?1
```

Parameters:

- ?1 → 2019

## 2. join (KJoin) methods

The join (KJoin) methods allow adding a JOIN (LEFT, RIGTH, INNER) between a previously existing table in the SQL statement against a new table supplied by parameter, through multiple columns in multiple conditions as required by your information need. The syntax of this type of method is given as follows:

- left | right | inner + Join(String table, KJoin kJoin)

where:

- **table**: Name of the new table to be added in the JOIN.
- **kJoin**: Set of conditions to consider to be added to the JOIN. This object allows adding conditions in a similar way to how it is done through the where method. The first condition of the KJoin object must be added through the on method and applies for equality between columns.

### Examples

**Example 1**: Consider a table of projects whose owner of the project can be one of two different entities of the system, a user or a team (The data of users and teams are in different tables). In this sense, you need to find the id and name of all the projects plus the type of owner (user or team) and the name of the owner of each project.

Java code:

```java showLineNumbers
//ProjectOwnerType:
//public static final Long USER = 1L;
//public static final Long TEAM = 2L;

K.
table("project p").
leftJoin("app_user au", new KJoin() {
    @Override
    public KJoin execute(final KJoin kJoin) {
        return kJoin.on("au.id", "p.project_owner_id").where("p.project_owner_type_id", USER);
    }
}).
leftJoin("team t", new KJoin() {
    @Override
    public KJoin execute(final KJoin kJoin) {
        return kJoin.on("t.id", "p.project_owner_id").where("p.project_owner_type_id", TEAM);
    }
}).
select(
    "p.id",
    "p.name AS projectName",
    String.format("(CASE WHEN p.project_owner_type_id = %s THEN CONCAT(au.name, ' ', au.last_name) ELSE t.name END) AS ownerName", USER)
).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT p.id, p.name AS projectName, (CASE WHEN p.project_owner_type_id = 1 THEN CONCAT(au.name, ' ', au.last_name) ELSE t.name END) AS ownerName
FROM project p
LEFT JOIN app_user au ON ( au.id = p.project_owner_id AND p.project_owner_type_id = ?1 )
LEFT JOIN team t ON ( t.id = p.project_owner_id AND p.project_owner_type_id = ?2 )
```

Parameters:

- ?1 → 1
- ?2 → 2

## 3. joinSub (c1, c2) methods

The joinSub (c1, c2) methods allow adding a JOIN (LEFT, RIGTH, INNER) between a previously existing table in the SQL statement against a new table that will be built through a subquery (The subquery is embedded in the JOIN clause), through only two columns in a single condition. The syntax of this type of method is given as follows:

- left | right | inner + JoinSub(KQuery kQuery, String alias, String c1, String c2)

where:

- **kQuery**: kQuery object with all the clauses and conditions necessary to build the subquery that will be the new table to be added in the JOIN.
- **alias**: Alias of the new table to be added in the JOIN.
- **c1**: Name of the first column to be added to the JOIN condition.
- **c2**: Name of the second column to be added to the JOIN condition.

### Examples

**Example 1**: Consider a table of projects whose owner of the project can be one of two different entities of the system, a user or a team (The data of users and teams are in different tables). In this sense, it is requested to show the name of the user and the name of the projects of which they are owners. If any user does not own any project, he must appear once without an associated project.

Java code:

```java showLineNumbers
//ProjectOwnerType:
//public static final Long USER = 1L;
//public static final Long TEAM = 2L;

K.
table("app_user au").
leftJoinSub(
    K.
    table("project p").
    select(
        "p.name",
        "p.project_owner_id"
    ).
    where("p.project_owner_type_id", USER),
    "pp",
    "pp.project_owner_id",
    "au.id"
).
select(
    "pp.name AS projectName",
    "CONCAT(au.name, ' ', au.last_name) AS name"
).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT pp.name AS projectName, CONCAT(au.name, ' ', au.last_name) AS name
FROM app_user au
LEFT JOIN 
    (
        SELECT p.name, p.project_owner_id
        FROM project p
        WHERE p.project_owner_type_id = ?1
    ) AS pp
    ON pp.project_owner_id = au.id
```

Parameters:

- ?1 → 1

## 4. joinSub (KJoin) methods

The joinSub (KJoin) methods allow adding a JOIN (LEFT, RIGTH, INNER) between a previously existing table in the SQL statement against a new table that will be built through a subquery (The subquery is embedded in the JOIN clause), through multiple columns in multiple conditions as required by your information need. The syntax of this type of method is given as follows:

- left | right | inner + JoinSub(KQuery kQuery, String alias, KJoin kJoin)

where:

- **kQuery**: kQuery object with all the clauses and conditions necessary to build the subquery that will be the new table to be added in the JOIN.
- **alias**: Alias of the new table to be added in the JOIN.
- **kJoin**: Set of conditions to consider to be added to the JOIN. This object allows adding conditions in a similar way to how it is done through the where method. The first condition of the KJoin object must be added through the on method and applies for equality between columns.

### Examples

**Example 1**: Consider a table of projects whose owner of the project can be one of two different entities of the system, a user or a team (The data of users and teams are in different tables). In this sense, it is requested to show the name of the user and the name of the projects of which they are owners. If any user does not own any project, he must appear once without an associated project. As an additional condition, add that the user must have been created in the year 2021.

Java code:

```java showLineNumbers
//ProjectOwnerType:
//public static final Long USER = 1L;
//public static final Long TEAM = 2L;

K.
table("app_user au").
leftJoinSub(
    K.
    table("project p").
    select(
        "p.name",
        "p.project_owner_id"
    ).
    where("p.project_owner_type_id", USER),
    "pp",
    new KJoin() {
        @Override
        public KJoin execute(KJoin kJoin) {
            return kJoin.on("pp.project_owner_id", "au.id").whereYear("au.created_at", 2021);
        }
    }
).
select(
    "pp.name",
    "CONCAT(au.name, ' ', au.last_name) AS name"
).
multiple();

```

SQL generated:

```sql showLineNumbers
SELECT pp.name, CONCAT(au.name, ' ', au.last_name) AS name
FROM app_user au
LEFT JOIN
    (
        SELECT p.name, p.project_owner_id
        FROM project p
        WHERE p.project_owner_type_id = ?1
    ) AS pp
    ON
    (
        pp.project_owner_id = au.id
        AND EXTRACT( YEAR FROM au.created_at ) = ?2
    )
```

Parameters:

- ?1 → 1
- ?2 → 2021