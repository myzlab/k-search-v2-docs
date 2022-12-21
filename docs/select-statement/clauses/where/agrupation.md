---
title: Agrupation
sidebar_label: Agrupation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

## How to group multiple conditions?

The available methods for adding grouped conditions to the WHERE clause are:

- orWhere | where(KWhere kWhere)

where:

- **kWhere**: A kWhere object with all the conditions that must be grouped.

The creation of a new kWhere object will require the implementation of the execute() method in which you can add any condition through the kWhere object that provides this method. In this sense, it is necessary that the execute() method returns the same kWhere object that this method provides.

### Examples

**Example 1**: Find the id and last name of all users who satisfy the following conditions:

- The number of consecutive failed login attempts is less than 3.
- Your name be "John" or "Sara" (Ignore case sensitivity).

Java code:

```java showLineNumbers
final String name1 = "John";
final String name2 = "Sara";

K.
table("app_user au").
select(
    "au.id",
    "au.last_name AS lastName"
).
whereLessThan("au.failed_attempts", 3).
where(new KWhere() {
    @Override
    public KWhere execute(KWhere kWhere) throws KException {
        return kWhere.whereIEqual("au.name", name1).orWhereIEqual("au.name", name2);
    }
}).
multiple();
```

SQL generated:

```sql showLineNumbers
SELECT au.id, au.last_name AS lastName
FROM app_user au
WHERE au.failed_attempts < ?1
AND ( UPPER(au.name) = ?2 OR UPPER(au.name) = ?3 )
```

Parameters:

- ?1 → 3
- ?2 → "JOHN"
- ?3 → "SARA"

**Example 2**: Build a REST API that returns a JSON with all the customers in the database. Customers can have an associated user and with this a role which allows them to enter the system. The information to be returned must be the id, name, name of the role and the telephone number.

- **Note 1**: It must receive a parameter called keyword which must allow filtering by the following attributes: Name, last name, telephone number and name of the associated role.
- **Note 2**: A parameter called year must be received which should allow filtering by the year of creation of the customer.
- **Note 3**: You must receive a parameter called roleIds which is a String with a set of ids separated by commas that must allow filtering by the id of the roles.
- **Note 4**: The page and limit parameters must be enabled to keep paging active.
- **Note 5**: All parameters can be null.

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
    @Path("/list")
    @Produces(MediaType.APPLICATION_JSON)
    public Response list(
        @QueryParam("keyword") final String keyword, //Example: "jh"
        @QueryParam("roleIds") final String roleIds, //Example: "1,4,8"
        @QueryParam("year") final Integer year,      //Example: 2019
        @QueryParam("page") final Long page,         //Example: 4
        @QueryParam("limit") final Long limit        //Example: 10
    ) throws KException {
        return CustomerService.list(K, keyword, roleIds, year, page, limit);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="GS" label='CustomerService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.CustomerDAK;
import javax.ws.rs.core.Response;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class CustomerService {\n
    public static Response list(
        final KExecutor K,
        final String keyword,
        final String roleIds,
        final Integer year,
        final Long page,
        final Long limit
    ) throws KException {\n
        final KCollection customers = CustomerDAK.list(K, keyword, roleIds, year, page, limit);\n
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
import ve.zlab.k.KExecutor;
import ve.zlab.k.KWhere;
import ve.zlab.k.helper.sql.SQLHelper;\n
public class CustomerDAK {\n
    public static KCollection list(
        final KExecutor K,
        final String keyword,
        final String roleIds,
        final Integer year,
        final Long page,
        final Long limit
    ) throws KException {\n
        return
            K.
            table("customer c").
            leftJoin("app_user au", "c.app_user_id", "au.id").
            leftJoin("role r", "au.role_id", "r.id").
            select(
                "c.id",
                "c.name",
                "r.name AS roleName",
                "c.phone"
            ).
            whereIn("r.id", SQLHelper.stringToListLong(roleIds)).
            whereYear("c.created_at", year).
            where(new KWhere() {
                @Override
                public KWhere execute(KWhere kWhere) throws KException {
                    return kWhere.
                        whereILikeAny("c.name", keyword).
                        orWhereILikeAny("c.last_name", keyword).
                        orWhereILikeAny("c.phone", keyword).
                        orWhereILikeAny("r.name", keyword);
                }
            }).
            limit(limit).
            page(page).
            multiple();
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
    @GetMapping("/list")
    ResponseEntity list(
        @RequestParam("keyword") final String keyword, //Example: "jh"
        @RequestParam("roleIds") final String roleIds, //Example: "1,4,8"
        @RequestParam("year") final Integer year,      //Example: 2019
        @RequestParam("page") final Long page,         //Example: 4
        @RequestParam("limit") final Long limit        //Example: 10
    ) throws Exception {
        return CustomerService.list(K, keyword, roleIds, year, page, limit);
    }
}
`}
                </CodeBlock>
            </TabItem>
            <TabItem value="SS" label='CustomerService.java'>
                <CodeBlock language="java" showLineNumbers>
{`import com.example.dak.CustomerDAK;
import org.springframework.http.ResponseEntity;
import ve.zlab.k.KCollection;
import ve.zlab.k.KException;
import ve.zlab.k.KExecutor;\n
public class CustomerService {\n
    public static ResponseEntity list(
        final KExecutor K,
        final String keyword,
        final String roleIds,
        final Integer year,
        final Long page,
        final Long limit
    ) throws KException {\n
        final KCollection customers = CustomerDAK.list(K, keyword, roleIds, year, page, limit);\n
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
import ve.zlab.k.KExecutor;
import ve.zlab.k.KWhere;
import ve.zlab.k.helper.sql.SQLHelper;\n
public class CustomerDAK {\n
    public static KCollection list(
        final KExecutor K,
        final String keyword,
        final String roleIds,
        final Integer year,
        final Long page,
        final Long limit
    ) throws KException {\n
        return
            K.
            table("customer c").
            leftJoin("app_user au", "c.app_user_id", "au.id").
            leftJoin("role r", "au.role_id", "r.id").
            select(
                "c.id",
                "c.name",
                "r.name AS roleName",
                "c.phone"
            ).
            whereIn("r.id", SQLHelper.stringToListLong(roleIds)).
            whereYear("c.created_at", year).
            where(new KWhere() {
                @Override
                public KWhere execute(KWhere kWhere) throws KException {
                    return kWhere.
                        whereILikeAny("c.name", keyword).
                        orWhereILikeAny("c.last_name", keyword).
                        orWhereILikeAny("c.phone", keyword).
                        orWhereILikeAny("r.name", keyword);
                }
            }).
            limit(limit).
            page(page).
            multiple();
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
SELECT c.id, c.name, r.name AS roleName, c.phone
FROM customer c
LEFT JOIN app_user au ON c.app_user_id = au.id
LEFT JOIN role r ON au.role_id = r.id
WHERE r.id IN ( ?1, ?2, ?3 )
AND EXTRACT( YEAR FROM c.created_at ) = ?4
AND
(
    UPPER(c.name) LIKE ?5
    OR UPPER(c.last_name) LIKE ?6
    OR UPPER(c.phone) LIKE ?7
    OR UPPER(r.name) LIKE ?8
)
LIMIT 10
OFFSET 30
```

Parameters:

- ?1 → 1
- ?2 → 4
- ?3 → 8
- ?4 → 2019
- ?5 → "%jh%"
- ?6 → "%jh%"
- ?7 → "%jh%"
- ?8 → "%jh%"

JSON generated:

```js showLineNumbers
{
    "items": [
        {
            "id": 121,
            "name": "John Snow",
            "roleName": "Customer",
            "phone": "570120214301"
        },
        {
            "id": 124,
            "name": "John Picasso",
            "roleName": "Customer VIP",
            "phone": "575955237878"
        }
    ]
}
```