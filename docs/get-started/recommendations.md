---

---

# Recommendations

## DAK Layer

Our first recommendation is that regardless of the current folder structure of your project or the number of packages or layers it contains, you create a new package or layer called "DAK", which will contain the objects that are only allowed to execute statements against the database.<br/>
In this sense, no other type of object (RestControllers, Services, etc.), can perform any type of operation against the database.

We will illustrate what has been said with the following image:

![Layers](/img/layers.png)

Likewise, another recommendation is that for each table present in the database, there is an associated DAK object, so for each example presented in the following chapters of this documentation, we will begin to see DAK objects, such as CustomerDAK, OrderDAK, PoliceDAK, etc.

## Error handling for REST (Guard clauses)

An exception does not always have to be a headache. We'll look at the positive side of using exceptions in conjunction with an `ExceptionHandler`.

An `ExceptionHandler` will allow you to control the exceptions thrown that we want in your API Rest in such a way that the response always has the appropriate response code for each occasion (a 500 error code should never be presented as your API Rest response).

In this sense, we will tell to `ExceptionHandler` that always catch exceptions of the `KException` type, since they will be exceptions that we will be throwing intentionally and constantly as guard clauses.

To do this, we need to add one `ExceptionHandler` to each RestController you'll be working on. You can create a generic RestController and apply inheritance from the others RestController, so that you define the ExceptionHandler only once.

```java showLineNumbers
import java.time.LocalDateTime;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ve.zlab.k.KException;
import ve.zlab.k.response.DynamicObject;

public class CommonController {

    @ExceptionHandler(KException.class)
    public ResponseEntity<String> handleCustomException(KException kException) {
        return ResponseEntity.status(kException.getStatus()).body(DynamicObject.create()
            .add("timestamp", LocalDateTime.now().toString())
            .add("error", kException.getStatus().name())
            .add("status", kException.getStatus().value())
            .add("message", kException.getMessage())
            .toJSON()
        );
    }

}
```