---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Single Query

In this section you will learn how to build and execute queries whose objective is to search for a single record on the database through the **_KSearch_** library as well as how to manipulate the information once it has been extracted from the database.

## The single() method and the KRow object

The way available through **_KSearch_** to build and execute queries that are in charge of searching for a single record on the database is with the `single()` method.

This method returns a KRow object which serves as a Java storage for the record returned by the generated and executed SQL query.

If the generated SQL query returns more than one record or no records from the database, then the KRow that is returned is considered a null KRow (A KRow without data). The only method available on a null KRow is the `isNull()` method, which returns true or false if the KRow is null or not respectively.

**Note**: The `single()` method internally invoke the `getSingleResult()` method of a native query built through the EntityManager from JPA.

## How to manipulate data stored in a KRow object?

There are different methods for the extraction or manipulation of data in a KRow object and they will be shown below:

### 1. `get` methods

The get methods allow the extraction of a single data from the KRow object. They have two ways of being used:

1. Receiving as a parameter a int value, which corresponds to the index of the column that you want to extract.
2. Receiving as a parameter a String value, which corresponds to the name of the column that you want to extract. Notably, if in the generated SQL query, the column has an alias, the String value to be received by parameter must correspond to the name of the alias (The name of the column is overridden by the alias for the use get methods).

In this sense, the `get` methods are divided according to the type of data to be extracted:

| Datatype | `get` method |
|----------|--------------|
| Object | get() |
| String | getString() |
| Character | getCharacter() |
| UUID | getUUID() |
| BigDecimal | getBigDecimal() |
| BigInteger | getBigInteger() |
| Long | getLong() |
| Integer | getInteger() |
| Boolean | getBoolean() |
| Double | getDouble() |
| LocalDateTime | getLocalDateTime() |
| LocalDate | getLocalDate() |
| Date | getDate() |
| Timestamp | getTimestamp() |

Additionally, the KRow object has 3 methods that allow verifying the nullity of the entire object or of a specific column:

1. isNull(): Returns true if the generated SQL query returns more than one record or no record (A KRow without data), in any other case, it returns false.
2. isNull(int): Receiving as a parameter a int value, it allows verifying the nullity of the column whose index matches the supplied parameter. It returns true if the value of the column according to the supplied index is null, in any other case, it returns false.
3. isNull(String): Receiving a String value as a parameter, allows verifying the nullity of the column whose name or alias matches the supplied parameter (The column name is overridden by the alias for using this method). It returns true if the value of the column according to the name or alias supplied is null, in any other case, it returns false.

### 2. `toMap()` method

The `toMap()` method allows the extraction of all the data contained in the KRow object through the java.util.Map data structure.
The name of the keys in the map is given by the name of the columns of the SQL query, but if these columns are assigned an alias, then the name of the key will be the alias (The name of the column is overridden by the alias).
It is very useful at the moment to use it in conjunction with the DynamicObject object to return it as a response from an API. To learn more about how to use the DynamicObject object, go to the DynamicObject section.

### 3. buildResponse() method

The buildResponse() method converts the KRow object into a String with JSON format to later be returned as a response from an API through a javax.ws.rs.core.Response object or an org.springframework.http.ResponseEntity object depending on the framework and server that is being used.
The name of the JSON properties is given by the name of the columns in the SQL query, but if these columns are assigned an alias, then the property name will be the alias (The name of the column is overridden by alias).

## Examples

We will illustrate the above with the following practical examples:

**Example 1**: Given the id of a user, must be searched in the database the name and email of the user that matches that id. If the user does not exist, print the message "User does not exist", if the user exists but does not have an email address, print their name and the message "This user does not have email" and if the user exists and has email, print their name and email.

**Note**: All users have a name in the database.

Java code:

```java showLineNumbers
final Long id = 333; //The id of the user to search

final KRow user =
    K.
    table("app_user").
    select(
        "name", //index 0
        "email" //index 1
    ).
    where("id", id).
    single();

if (user.isNull()) {
    System.out.println("User does not exist");
    return;
}

System.out.println("Username: " + user.getString("name")); //John
System.out.println("Username: " + user.getString(0));      //John

if (user.isNull("email")) {
    System.out.println("This user does not have email");
    return;
}

System.out.println("Email of user: " + user.getString("email")); //john@myemail.com
System.out.println("Email of user: " + user.getString(1));       //john@myemail.com
```

SQL generated:

```sql showLineNumbers
SELECT name, email
FROM app_user
WHERE id = ?1
```

Parameters:

- ?1 → 333

**Example 2**: Show the id and the registration date of the first user in the year 2021 who was registered without email. If there are none, show the message "All users of that year have email".

**Note**: Show the date according to the ISO8601 standard.

Java code:

```java showLineNumbers
import ve.zlab.k.helper.sql.SQLHelper;

final KRow user =
    K.
    table("app_user").
    select(
        "id",                                                          //index 0
        SQLHelper.timestampToISO8601("created_at", "registrationDate") //index 1
    ).
    whereNull("email").
    whereYear("created_at", 2021).
    orderByAsc("registrationDate").
    limit(1L).
    single();

if (user.isNull()) {
    System.out.println("All users of that year have email");
    return;
}

System.out.println("User ID: " + user.getLong("id")); //7
System.out.println("User ID: " + user.getLong(0));    //7

System.out.println("Registration Date: " + user.getString("registrationDate")); //2021-04-24T05:03:35.726Z
System.out.println("Registration Date: " + user.getString(1));                  //2021-04-24T05:03:35.726Z
```

SQL generated:

```sql showLineNumbers
SELECT id, TO_CHAR(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS registrationDate 
FROM app_user
WHERE email IS NULL
AND EXTRACT( YEAR FROM created_at ) = ?1
ORDER BY registrationDate ASC
LIMIT 1
```

Parameters:

- ?1 → 2021

**Example 3**: Build a REST API that, given the id of a user, returns a JSON including his name, surname and date of birth as personal information.

**Note**: Show date according to ISO8601 standard.

Java code:

<Tabs>
    <TabItem value="G" label='Glassfish / JBoss - Wildfly' default>
        <Tabs>
            <TabItem value="GC" label='UserController.java' default>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.services.UserService;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
@Stateless
@Path("/user")
public class UserController {\n
    @EJB
    public KExecutor K;\n
    @GET
    @Path("/{id}/personal-information")
    @Produces(MediaType.APPLICATION_JSON)
    public Response personalInformation(
        @PathParam("id") final Long id //Example: 3201
    ) throws KException {
        return UserService.personalInformation(K, id);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GS" label='UserService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.UserDAK;
import javax.ws.rs.core.Response;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KRow;
import ve.zlab.k.response.DynamicObject;\n
public class UserService {\n
    public static Response personalInformation(
        final KExecutor K,
        final Long id
    ) throws KException {
        final KRow personalInformation = UserDAK.getPersonalInformation(K, id);\n
        return DynamicObject.create().
            add("personalInformation", personalInformation.toMap()).
            toResponse();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GD" label='UserDAK.java'>
                <CodeBlock language="java" showLineNumbers>
{`import javax.ws.rs.core.Response;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KRow;
import ve.zlab.k.helper.sql.SQLHelper;\n
public class UserDAK {\n
    public static KRow getPersonalInformation(
        final KExecutor K,
        final Long id
    ) throws KException {\n
        return 
            K.
            table("app_user au").
            select(
                "au.name",
                "au.last_name AS lastName",
                SQLHelper.dateToISO8601("au.birthdate", "birthdate")
            ).
            where("au.id", id).
            single().
            assertNotNull(Response.Status.NOT_FOUND, "User not found");
    }
}
`}
                </CodeBlock>
            </TabItem>
        </Tabs>
    </TabItem>
    <TabItem value="S" label='Spring'>
        <Tabs>
            <TabItem value="SC" label='UserController.java' default>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ve.zlab.k.KExecutor;\n
@RestController
@RequestMapping("user")
public class UserController {\n
    protected final KExecutor K;\n
    public UserController(
        final KExecutor k
    ) {
        K = k;
    }\n
    @GetMapping("/{id}/personal-information")
    public ResponseEntity personalInformation(
        @RequestParam("id") final Long id //Example: 3201
    ) throws Exception {
        return UserService.personalInformation(K, id);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SS" label='UserService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.UserDAK;
import org.springframework.http.ResponseEntity;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KRow;
import ve.zlab.k.response.DynamicObject;\n
public class UserService {\n
    public static ResponseEntity personalInformation(
        final KExecutor K,
        final Long id
    ) throws KException {
        final KRow personalInformation = UserDAK.getPersonalInformation(K, id);\n
        return DynamicObject.create().
            add("personalInformation", personalInformation.toMap()).
            toResponse();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SD" label='UserDAK.java'>
                <CodeBlock language="java" showLineNumbers>
{`import org.springframework.http.HttpStatus;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KRow;
import ve.zlab.k.helper.sql.SQLHelper;\n
public class UserDAK {\n
    public static KRow getPersonalInformation(
        final KExecutor K,
        final Long id
    ) throws KException {\n
        return 
            K.
            table("app_user au").
            select(
                "au.name",
                "au.last_name AS lastName",
                SQLHelper.dateToISO8601("au.birthdate", "birthdate")
            ).
            where("au.id", id).
            single().
            assertNotNull(HttpStatus.NOT_FOUND, "User not found");
    }
}
`}
                </CodeBlock>
            </TabItem>
        </Tabs>
    </TabItem>
</Tabs>

SQL generated:

```sql showLineNumbers
SELECT au.name, au.last_name AS lastName, TO_CHAR(au.birthdate, 'YYYY-MM-DD') AS birthdate
FROM app_user au
WHERE au.id = ?
```

Parameters:

- ?1 → 201

JSON generated:

```js showLineNumbers
{
    "name": "John",
    "birthdate": "1991-05-01"
}
```