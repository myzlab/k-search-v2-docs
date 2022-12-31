---
title: Boolean Conditions methods
sidebar_label: Boolean Conditions
---

## Definition

The Boolean Conditions methods allow you to add the IS TRUE, IS FALSE or IS UNKNOWN condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

## True methods

The True methods allow you to add the IS TRUE condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + True(String c)

where:

- **c**: Name of the column against which you want to add the condition.

### Examples

**Example 1**: Find the id and last name of all users who have verified their email.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereTrue("au.verified_email").
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.verified_email IS TRUE
```

Parameters: None

## False methods

The False methods allow you to add the IS FALSE condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + False(String c)

where:

- **c**: Name of the column against which you want to add the condition.

### Examples

**Example 1**: Find the id and last name of all users who have not verified their email.

Java code:

```java showLineNumbers
K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereFalse("au.verified_email").
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.verified_email IS FALSE
```

Parameters: None

## Unknown methods

The Unknown methods allow you to add the IS UNKNOWN condition to the SQL statement. The available methods to add this condition to the WHERE clause are:

- orWhere | where + [ Not ] + Unknown(String c)

where:

- **c**: Name of the column against which you want to add the condition.

### Examples

**Example 1**:  Considering that the invitation_answer attribute is a boolean that allows storing the response of a user to the invitation to a meeting, with the following possible values:

- TRUE: The user will attend the meeting.
- FALSE: The user will not attend the meeting.
- UNKNOWN: The user has not responded to the invitation.

Find the id and last name of all users (Without repeating) who have not responded to at least one invitation.

Java code:

```java showLineNumbers
K.
table("app_user au").
innerJoin("meeting_invitation mi", "mi.app_user_id", "mi.id").
select(
    "au.id",
    "au.last_name AS lastName"
).
distinct().
whereUnknown("mi.invitation_answer").
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT DISTINCT au.id, au.last_name AS lastName
FROM app_user au
INNER JOIN meeting_invitation mi ON mi.app_user_id = mi.id
WHERE mi.invitation_answer IS UNKNOWN
```

Parameters: None
