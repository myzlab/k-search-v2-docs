---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Multiple Query

In this section you will learn how to build and execute queries whose objective is to search multiples records on the database through the **_KSearch_** library as well as how to manipulate the information once it has been extracted from the database.

## The multiple() method and the KCollection object

The way available through **_KSearch_** to build and execute queries that are in charge of searching for multiples records on the database is with the `multiple()` method.

This method returns a KCollection object which serves as a Java storage for the records returned by the generated and executed SQL query.

**Note**: The `multiple()` method internally invoke the getResultList() method of a native query built through the EntityManager from JPA.

## How to manipulate data stored in a KCollection object?

There are different methods for the extraction and manipulation of data in a KCollection object and they will be shown below:

### 1. `pluck` methods

The `pluck` methods allow the extraction of a single attribute from all KRow objects contained in the KCollection object. These values are returned in a java.util.List. They have two ways of being used:

1. Receiving as a parameter a int value, which corresponds to the index of the column that you want to extract.
2. Receiving as a parameter a String value, which corresponds to the name of the column that you want to extract. Notably, if in the generated SQL query, the column has an alias, the String value to be received by parameter must correspond to the name of the alias (The name of the column is overridden by the alias for the use get methods).

In this sense, the `pluck` methods are divided according to the type of data to be extracted:

| Datatype | `pluck` method |
|----------|----------------|
| List&lt;Object&gt; | pluck() |
| List&lt;String&gt; | pluckString() |
| List&lt;Character&gt; | pluckCharacter() |
| List&lt;UUID&gt; | pluckUUID() |
| List&lt;BigDecimal&gt; | pluckBigDecimal() |
| List&lt;BigInteger&gt; | pluckBigInteger() |
| List&lt;Long&gt; | pluckLong() |
| List&lt;Integer&gt; | pluckInteger() |
| List&lt;Boolean&gt; | pluckBoolean() |
| List&lt;Double&gt; | pluckDouble() |
| List&lt;LocalDateTime&gt; | pluckLocalDateTime() |
| List&lt;LocalDate&gt; | pluckLocalDate() |
| List&lt;Date&gt; | pluckDate() |
| List&lt;Timestamp&gt; | pluckTimestamp() |

### 2. `toList()` method

The `toList()` method allows the extraction of all the data contained in the KCollection object through the java.util.List data structure. This list contains objects of type java.util.Map which are equivalent to the KRow contained in the KCollection object.

The name of the keys in the map is given by the name of the columns of the SQL query, but if these columns have assigned an alias, then the name of the key will be the alias (The name of the column is overridden by the alias).

It is very useful when used in conjunction with the DynamicObject object to return it as a response from an API. To learn more about how to use the DynamicObject object, go to the DynamicObject section.

### 3. `getCollection()` method

The `getCollection()` method allows the extraction of all the data contained in the KCollection object through the java.util.List data structure. This list will contain KRow objects which correspond to all KRow contained in the KCollection object.

### 4. `twoColumnsToMap()` method

The `twoColumnsToMap()` method allows the extraction of only two columns from all the KRow contained in the KCollection object through the data structure java.util.HashMap.

To achieve this objective, this method receives two parameters of type String, which will be the names of the attributes to be extracted from the KRow objects and will correspond to the key and the value of the resulting map. If in the generated SQL query, the column has an alias, the String value to be received by parameter must correspond to the name of the alias (The name of the column is overridden by the alias).

In addition, this method receives 2 additional parameters of type Class, which will correspond to the datatype of the key and the value of the resulting map. All parameters are required.

The types of data available are:

| Datatype |
|----------|
| Object |
| String |
| Character |
| UUID |
| BigDecimal |
| BigInteger |
| Long |
| Integer |
| Boolean |
| Double |
| LocalDateTime |
| LocalDate |
| Date |
| Timestamp |

Example of use:

```java showLineNumbers
final KCollection users =
    K.
    table("app_user").
    select(
        "id",                       //Long
        "name",                     //String
        "last_name AS lastName",    //String
        "created_at AS createdAt"   //Timestamp
    ).
    multiple();
        
final Map<Long, String> idWithName = users.twoColumnsToMap("id", "name", Long.class, String.class);
final Map<String, Timestamp> lastNameWithCreatedAt = users.twoColumnsToMap("lastName", "createdAt", String.class, Timestamp.class);
```

### 5. `groupKCollectionBy()` method

The groupKCollectionBy methods allow grouping KCollection by a single KRow attribute. This attribute will become the **key** of the resulting map. The **value**value of the resulting map will be of type KCollection and will contain all KCollection already grouped.

The name of the groupKCollectionBy methods are defined according to the type of data you want for the key of the resulting map:

| Datatype | `groupKCollectionBy` method |
|----------|--------------|
| Map&lt;Object, KCollection&gt; | groupKCollectionByObjectColumn() |
| Map&lt;String, KCollection&gt; | groupKCollectionByStringColumn() |
| Map&lt;Character, KCollection&gt; | groupKCollectionByCharacterColumn() |
| Map&lt;UUID, KCollection&gt; | groupKCollectionByUUIDColumn() |
| Map&lt;BigDecimal, KCollection&gt; | groupKCollectionByBigDecimalColumn() |
| Map&lt;BigInteger, KCollection&gt; | groupKCollectionByBigIntegerColumn() |
| Map&lt;Long, KCollection&gt; | groupKCollectionByLongColumn() |
| Map&lt;Integer, KCollection&gt; | groupKCollectionByIntegerColumn() |
| Map&lt;Boolean, KCollection&gt; | groupKCollectionByBooleanColumn() |
| Map&lt;Double, KCollection&gt; | groupKCollectionByDoubleColumn() |
| Map&lt;LocalDateTime, KCollection&gt; | groupKCollectionByLocalDateTimeColumn() |
| Map&lt;LocalDate, KCollection&gt; | groupKCollectionByLocalDateColumn() |
| Map&lt;Date, KCollection&gt; | groupKCollectionByDateColumn() |
| Map&lt;Timestamp, KCollection&gt; | groupKCollectionByTimestampColumn() |

### 6. `groupListBy()` method

The `groupListBy` methods allow grouping the KRow contained in the KCollection by a single attribute of the KRow. This attribute will become the key of the resulting map. The value of the resulting map will be of type java.util.List and it will contain all KRow already grouped.

The name of the groupListBy methods are defined according to the type of data you want for the key of the resulting map:

| Datatype | `groupListBy` method |
|----------|--------------|
| Map&lt;Object, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByObjectColumn() |
| Map&lt;String, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByStringColumn() |
| Map&lt;Character, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByCharacterColumn() |
| Map&lt;UUID, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByUUIDColumn() |
| Map&lt;BigDecimal, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByBigDecimalColumn() |
| Map&lt;BigInteger, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByBigIntegerColumn() |
| Map&lt;Long, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByLongColumn() |
| Map&lt;Integer, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByIntegerColumn() |
| Map&lt;Boolean, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByBooleanColumn() |
| Map&lt;Double, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByDoubleColumn() |
| Map&lt;LocalDateTime, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByLocalDateTimeColumn() |
| Map&lt;LocalDate, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByLocalDateColumn() |
| Map&lt;Date, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByDateColumn() |
| Map&lt;Timestamp, List&lt;Map&lt;String, Object&gt;&gt;&gt; | groupListByTimestampColumn() |

### 7. `buildResponse()` method

The `buildResponse()` method converts the KCollection object into a String with JSON format to later be returned as a response from an API through an object javax.ws.rs.core.Response or an object org.springframework.http.ResponseEntity depending on the framework and server that is being used.

The name of the properties of the JSON is given by the name of the columns of the SQL query, but if these columns have an alias assigned, then the name of the property will be the alias (The name of the column is overridden by the alias).

### 8. `transform()` method

The `transform()` method allows modifying the value of an attribute of the KRow contained in the KCollection object.

To do this, a value of type String is requested as the first parameter, which corresponds to the attribute of the KRow objects that you want to modify. The second parameter is a KRowFunction method that must return the new value that will replace the aforementioned attribute.

This KRowFunction will be executed on each KRow contained in the KCollection object.

**Note**: The KRowFunction can be a lambda expression, which can only be used from Java 8 onwards.

### 9. `filter()` method

The `filter()` method allows you to filter the KRow contained in the KCollection object, returning a new KCollection with the KRow that satisfy the supplied condition.

To do this, a KRowFunction method is requested as a parameter, which must return a value of type java.lang.Boolean.

This KRowFunction will be executed on each KRow contained in the KCollection object and if when executing it on a KRow the resulting value is true then that KRow will be available in the new KCollection, otherwise the KRow is omitted from new KCollection generated.

**Note 1**: The new KCollection generated and the KRow it contains are clones of the original objects.

**Note 2**: Always try to filter directly on the database in the SQL statement and not on a KCollection object, unless it is strictly necessary.

**Note 3**: The KRowFunction can be a lambda expression, which can only be used from Java 8 onwards.

Example of use:

```java showLineNumbers
final KCollection allUsers =
    K.
    table("app_user").
    select(
        "id",
        "name",
        "profile_image"
    ).
    multiple();

System.out.println(allUsers);
/*
    [
        { "id": 1, "name": "Pedro", "profile_image": "https://..." }, 
        { "id": 2, "name": "John", "profile_image": null }, 
        { "id": 3, "name": "Beatrix", "profile_image": null },
        { "id": 4, "name": "Lina", "profile_image": "https://..." }, 
        { "id": 5, "name": "Pascal", "profile_image": null }
    ]
*/

final KCollection usersWithIdGreaterThan3 = allUsers.filter((KRowFunction<KRow>) (KRow kRow) -> { //Lambda expression
    return kRow.getLong("id") > 3;
});

System.out.println(usersWithIdGreaterThan3);
/*
    [
        { "id": 4, "name": "Lina", "profile_image": "https://..." }, 
        { "id": 5, "name": "Pascal", "profile_image": null }
    ]
*/

final KCollection usersWithProfileImage = allUsers.filter(new KRowFunction<KRow>() {

    @Override
    public Object run(KRow kRow) throws KException {
        return !kRow.isNull("profile_image");
    }
});

System.out.println(usersWithProfileImage);
/*
    [
        { "id": 1, "name": "Pedro", "profile_image": "https://..." }, 
        { "id": 4, "name": "Lina", "profile_image": "https://..." }
    ]
*/
```

### 10. `addProperty()` method

The `addProperty()` method allows adding a new attribute to the KRow contained in the KCollection object.

To do this, a value of type String is requested as the first parameter, which corresponds to the name of the new attribute of the KRow objects. The second parameter is a KRowFunction method that must return the corresponding value for the new attribute.

**Note**: The KRowFunction can be a lambda expression, which can only be used from Java 8 onwards.

### 11. `exclude()` method

The `exclude()` method works only to exclude the attributes with which the String with JSON format will be constructed in the invocation of the buildResponse() method. This method can receive multiple attribute names simultaneously separated by commas.

The name of the attribute that must be passed as a parameter is the name of the column in the SQL query, but if this column has an alias assigned, then the name that must be supplied will be the alias (The name of the column is overridden by the alias).

### 12. `addChildren()` method

The `addChildren()` method allows adding a new attribute to the KRow contained in the KCollection object. This new attribute will be of type java.util.List and will internally contain objects of type KRow.

The main operation of this method is to join a parent KCollection (which invokes the method) with the KRow objects of a child KCollection (which is passed by parameter) through two connection attributes.

To fulfill this purpose, several parameters must be supplied to this method:

- **name**: The name that the new KRow attribute will have in the parent KCollection.
- **parentConnectionColumn**parentConnectionColumn: The name of the connection attribute of the KRow of the parent KCollection object. The name of the attribute to supply is given by the name of the column in the SQL query, but if this column has an alias assigned, then the name of the attribute must be the alias (The name of the column is overridden by the alias).
- **childConnectionColumn**childConnectionColumn: The name of the connection attribute of the KRow of the child KCollection object. The name of the attribute to supply is given by the name of the column in the SQL query, but if this column has an alias assigned, then the name of the attribute must be the alias (The name of the column is overridden by the alias).
- **child**child: The KCollection child which contains all the KRow that should be added to the parent KCollection according to the connection attributes.
- **keepConnection**keepConnection (Optional - By default false): Value of type Boolean that in case of being true, tells the method that it should be kept in the KRow child of the attribute that serves as connection. In case of false the connection attribute of the child is removed.

With the supplied parameters, initially all KRow are grouped according to their connection attribute. Then these KRow are added as a new attribute to the KRow of the parent KCollection object as their connection attribute values match.

## Examples

We will illustrate the above with the following practical examples:

**Example 1**: Build a REST API that returns a JSON with all active polls in the database. The information to be returned from the poll must be the id, name and the id and name of all the questions associated with each poll.

**Note 1**: Show the creation date according to ISO8601 standard.
**Note 2**: The page and limit parameters must be enabled to keep paging active.

Java code:

<Tabs>
    <TabItem value="G" label='Glassfish / JBoss - Wildfly' default>
        <Tabs>
            <TabItem value="GC" label='PollController.java' default>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.services.PollService;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
@Stateless
@Path("/poll")
public class PollController {\n
    @EJB
    public KExecutor K;\n
    @GET
    @Path("/list")
    @Produces(MediaType.APPLICATION_JSON)
    public Response list(
        @QueryParam("page") final Long page,   //Example: 7
        @QueryParam("limit") final Long limit  //Example: 2
    ) throws KException {
        return PollService.fullList(K, page, limit);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GS" label='PollService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.PollDAK;
import javax.ws.rs.core.Response;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class PollService {\n
    public static Response fullList(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {
        final KCollection polls = PollDAK.fullList(K, page, limit);\n
        return polls.buildResponse();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GD" label='PollDAK.java'>
                <CodeBlock language="java" showLineNumbers>
{`import java.util.List;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class PollDAK {\n
    public static KCollection fullList(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {\n
        final KCollection polls =
            K.
            table("poll p").
            select(
                "p.id",
                "p.name"
            ).
            whereTrue("active").
            page(page).
            limit(limit).
            multiple(); //SQL number 1\n
        final List<Long> pollIds = polls.pluckLong("id"); //Example: 25, 31\n
        final KCollection questions =
            K.
            table("poll_question pq").
            select(
                "pq.id",
                "pq.question_name AS questionName",
                "pq.poll_id"
            ).
            whereIn("pq.poll_id", pollIds).
            multiple(); //SQL number 2\n
        polls.addChildren("questions", "id", "poll_id", questions);\n
        return polls;
    }
}
`}
                </CodeBlock>
            </TabItem>
        </Tabs>
    </TabItem>
    <TabItem value="S" label='Spring'>
        <Tabs>
            <TabItem value="SC" label='PollController.java' default>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.services.PollService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ve.zlab.k.KExecutor;\n
@RestController
@RequestMapping("poll")
public class PollController {\n
    protected final KExecutor K;\n
    public PollController(final KExecutor k) {
        K = k;
    }\n
    @GetMapping("/list")
    ResponseEntity list(
        @RequestParam("page") final Long page,   //Example: 7
        @RequestParam("limit") final Long limit  //Example: 2
    ) throws Exception {
        return PollService.fullList(K, page, limit);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SS" label='PollService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.PollDAK;
import javax.ws.rs.core.Response;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class PollService {\n
    public static Response fullList(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {
        final KCollection polls = PollDAK.fullList(K, page, limit);\n
        return polls.buildResponse();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SD" label='PollDAK.java'>
                <CodeBlock language="java" showLineNumbers>
{`import java.util.List;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class PollDAK {\n
    public static KCollection fullList(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {\n
        final KCollection polls =
            K.
            table("poll p").
            select(
                "p.id",
                "p.name"
            ).
            whereTrue("active").
            page(page).
            limit(limit).
            multiple(); //SQL number 1\n
        final List<Long> pollIds = polls.pluckLong("id"); //Example: 25, 31\n
        final KCollection questions =
            K.
            table("poll_question pq").
            select(
                "pq.id",
                "pq.question_name AS questionName",
                "pq.poll_id"
            ).
            whereIn("pq.poll_id", pollIds).
            multiple(); //SQL number 2\n
        polls.addChildren("questions", "id", "poll_id", questions);\n
        return polls;
    }
}
`}
                </CodeBlock>
            </TabItem>
        </Tabs>
    </TabItem>
</Tabs>

SQL generated 1:

```sql showLineNumbers
SELECT p.id, p.name
FROM poll p
WHERE active IS TRUE
LIMIT 2
OFFSET 12
```

Parameters: None

SQL generated 2:

```sql showLineNumbers
SELECT pq.id, pq.question_name AS questionName, pq.poll_id
FROM poll_question pq
WHERE pq.poll_id IN ( ?, ?, ? )
```

Parameters:

- ?1 → 7
- ?2 → 8
- ?3 → 9

JSON generated:

```js showLineNumbers
{
    "items": [
        {
            "id": 25,
            "name": "Classification of service",
            "questions": [
                {
                    "id": 15,
                    "questionName": "What's your name?"
                },
                {
                    "id": 17,
                    "questionName": "Where are you from?"
                },
                {
                    "id": 19,
                    "questionName": "How do you classify the service?"
                }
            ]
        },
        {
            "id": 31,
            "name": "Food flavor",
            "questions": [
                {
                    "id": 20,
                    "questionName": "What restaurant did you visit?"
                },
                {
                    "id": 23,
                    "questionName": "Was the meat well cooked?"
                }
            ]
        }
    ]
}
```

**Example 2**: Build a REST API that returns a JSON with all the clients in the database. The information to be returned must be the id, name, telephone number and if the client applies or not for promotion. In addition, the phone number must be returned masked.

**Note 1**: The algorithm that determines whether or not the customer applies for promotion depends on the creation date and the date of the customer's birth and will be in the form of a black box for our example.
**Note 2**: The algorithm that masks a phone number will be in the form of a black box for our example.
**Note 3**: The **page** and **limit** parameters must be enabled to keep paging active.

Java code:

<Tabs>
    <TabItem value="G" label='Glassfish / JBoss - Wildfly' default>
        <Tabs>
            <TabItem value="GC" label='CustomerController.java' default>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.services.CustomerService;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
@Stateless
@Path("/customer")
public class CustomerController {\n
    @EJB
    public KExecutor K;\n
    @GET
    @Path("/list-with-promotions-info")
    @Produces(MediaType.APPLICATION_JSON)
    public Response listWithPromotionsInfo(
        @QueryParam("page") final Long page,   //Example: 1
        @QueryParam("limit") final Long limit  //Example: 10
    ) throws KException {
        return CustomerService.listWithPromotionsInfo(K, page, limit);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GS" label='CustomerService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.CustomerDAK;
import com.example.utils.CodeBlackBox;
import javax.ws.rs.core.Response;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KRow;
import ve.zlab.k.functions.KRowFunction;\n
public class CustomerService {\n
    public static Response listWithPromotionsInfo(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {
        final KCollection customers = CustomerDAK.listWithPromotionsInfo(K, page, limit);\n
        customers.transform("phone", (KRowFunction<KRow>) (KRow kRow) -> CodeBlackBox.maskPhoneNumber(kRow.getString("phone")));
        customers.addProperty("applyForPromotion", (KRowFunction<KRow>) (KRow kRow) -> {
            return CodeBlackBox.applyForPromotion(kRow.getTimestamp("createdAt"), kRow.getDate("birthdate"));
        });\n
        customers.exclude("createdAt", "birthdate");\n
        return customers.buildResponse();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GD" label='CustomerDAK.java'>
                <CodeBlock language="java" showLineNumbers>
{`import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class CustomerDAK {\n
    public static KCollection listWithPromotionsInfo(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {\n
        return CustomerDAK.listPaginated(K, new String[] {
            "c.id",
            "c.name",
            "c.birthdate",
            "c.phone",
            "c.created_at AS createdAt"
        }, page, limit);
    }\n
    private static KCollection listPaginated(
        final KExecutor K,
        final String[] columns,
        final Long page,
        final Long limit
    ) throws KException {\n
        return
            K.
            table("customer c").
            select(columns).
            limit(limit).
            page(page).
            multiple();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GBB" label='CodeBlackBox.java'>
                <CodeBlock language="java" showLineNumbers>
{`import java.sql.Timestamp;
import java.util.Date;\n
public class CodeBlackBox  {\n
    public static String maskPhoneNumber(final String phoneNumber) {
        //Algorithm...
    }\n
    public static Boolean applyForPromotion(final Timestamp createdAt, final Date birthdate) {
        //Algorithm...
    }
}
`}
                </CodeBlock>
            </TabItem>
        </Tabs>
    </TabItem>
    <TabItem value="S" label='Spring'>
        <Tabs>
            <TabItem value="SC" label='CustomerController.java' default>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.services.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ve.zlab.k.KExecutor;\n
@RestController
@RequestMapping("customer")
public class CustomerController {\n
    protected final KExecutor K;\n
    public CustomerController(final KExecutor k) {
        K = k;
    }\n
    @GetMapping("/list-with-promotions-info")
    ResponseEntity listWithPromotionsInfo(
        @RequestParam("page") final Long page,   //Example: 1
        @RequestParam("limit") final Long limit  //Example: 10
    ) throws Exception {
        return CustomerService.listWithPromotionsInfo(K, page, limit);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SS" label='CustomerService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.CustomerDAK;
import com.example.utils.CodeBlackBox;
import org.springframework.http.ResponseEntity;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KRow;
import ve.zlab.k.functions.KRowFunction;\n
public class CustomerService {\n
    public static ResponseEntity listWithPromotionsInfo(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {
        final KCollection customers = CustomerDAK.listWithPromotionsInfo(K, page, limit);\n
        customers.transform("phone", (KRowFunction<KRow>) (KRow kRow) -> CodeBlackBox.maskPhoneNumber(kRow.getString("phone")));
        customers.addProperty("applyForPromotion", (KRowFunction<KRow>) (KRow kRow) -> {
            return CodeBlackBox.applyForPromotion(kRow.getTimestamp("createdAt"), kRow.getDate("birthdate"));
        });\n
        customers.exclude("createdAt", "birthdate");\n
        return customers.buildResponse();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SD" label='CustomerDAK.java'>
                <CodeBlock language="java" showLineNumbers>
{`import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class CustomerDAK {\n
    public static KCollection listWithPromotionsInfo(
        final KExecutor K,
        final Long page,
        final Long limit
    ) throws KException {\n
        return CustomerDAK.listPaginated(K, new String[] {
            "c.id",
            "c.name",
            "c.birthdate",
            "c.phone",
            "c.created_at AS createdAt"
        }, page, limit);
    }\n
    private static KCollection listPaginated(
        final KExecutor K,
        final String[] columns,
        final Long page,
        final Long limit
    ) throws KException {\n 
        return
            K.
            table("customer c").
            select(columns).
            limit(limit).
            page(page).
            multiple();
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SBB" label='CodeBlackBox.java'>
                <CodeBlock language="java" showLineNumbers>
{`import java.sql.Timestamp;
import java.util.Date;\n
public class CodeBlackBox  {\n
    public static String maskPhoneNumber(final String phoneNumber) {
        //Algorithm...
    }\n
    public static Boolean applyForPromotion(final Timestamp createdAt, final Date birthdate) {
        //Algorithm...
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
SELECT c.id, c.name, c.birthdate, c.phone, c.created_at AS createdAt
FROM customer c
LIMIT 10
OFFSET 0
```

Parameters: None

JSON generated:

```js showLineNumbers
{
    "items": [
        {
            "id": 77,
            "name": "John Snow",
            "phone": "57XXXXXX4301",
            "applyForPromotion": true
        },
        {
            "id": 78,
            "name": "John Snow",
            "phone": "57XXXXXX7878",
            "applyForPromotion": false
        }
    ]
}
```