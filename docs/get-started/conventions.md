---

---

# Conventions

## DAK Layer

Our first convention is that regardless of the current folder structure of your project or the number of packages or layers it contains, you create a new package or layer called **__dak__**, which will contain the objects that are only allowed to execute statements against the database.<br/>
In this sense, no other type of object (RestControllers, Services, etc.), can perform any type of operation against the database.

We will illustrate what has been said with the following image:

![Layers](/img/layers.png)

Likewise, another conventions is that for each table present in the database, there is an associated DAK object, so for each example presented in the following chapters of this documentation, we will begin to see DAK objects, such as CustomerDAK, OrderDAK, PoliceDAK, etc.

## Error handling for REST (Guard clauses)

An exception does not always have to be a headache. We'll look at the positive side of using exceptions in conjunction with an `ExceptionHandler`.

An `ExceptionHandler` will allow you to control the exceptions thrown that we want in your API Rest in such a way that the response always has the appropriate response code for each occasion (a 500 error code should never be presented as your API Rest response).

In this sense, we will tell to `ExceptionHandler` that always catch exceptions of the `KException` type, since they will be exceptions that we will be throwing intentionally and constantly as guard clauses.

To do this, we need to create a generic RestController and define the `ExceptionHandler`. Then, you must apply the inheritance from the other RestControllers to the generic controller, as follows:

```java
import java.time.LocalDateTime;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ve.zlab.k.KException;
import ve.zlab.k.response.DynamicObject;

public class CommonController {

    @ExceptionHandler(KException.class)
    public ResponseEntity<String> handleCustomException(KException kException) {
        return ResponseEntity.status(kException.getStatus()).body(
            DynamicObject.create()
                .add("timestamp", LocalDateTime.now().toString())
                .add("error", kException.getStatus().name())
                .add("status", kException.getStatus().value())
                .add("message", kException.getMessage())
            .toJSON()
        );
    }

}
```

:::info

Feel free to modify this class as you see fit.

:::

## Error handling for GRPC (Guard clauses)

:::caution

If you are not using GRPC, skip this convention.

:::

This is similar to the previous convention, only it applies to procedures created through GRPC. We'll look at the positive side of using exceptions in conjunction with an `GRpcExceptionHandler`.

An `GRpcExceptionHandler` will allow you to control the exceptions thrown that we want in your procedures in such a way that the response always has the appropriate syntax for each occasion.

In this sense, we will tell to `GRpcExceptionHandler` that always catch exceptions of the `KException`, `StatusRuntimeException` and `NullPointerException` type (you can add all the exceptions you need), since they will be exceptions that we will be throwing intentionally and constantly as guard clauses.

To do this, we need to create a new class and define the `GRpcExceptionHandler` (it can be in any package), as follows:

```java
package com.example.grpc.exceptions;

import com.myzlab.k.KException;
import io.grpc.Status;
import io.grpc.StatusRuntimeException;
import org.lognet.springboot.grpc.recovery.GRpcExceptionHandler;
import org.lognet.springboot.grpc.recovery.GRpcExceptionScope;
import org.lognet.springboot.grpc.recovery.GRpcServiceAdvice;

@GRpcServiceAdvice
public class KExceptionGrpcHandler {
    
    @GRpcExceptionHandler
    public Status handle (
        final KException kException,
        final GRpcExceptionScope scope
    ) {
        return Status.UNKNOWN
            .withDescription(kException.getStatus().value() + ":" + kException.getMessage());
    }
    
    @GRpcExceptionHandler
    public Status handle (
        final StatusRuntimeException statusRuntimeException,
        final GRpcExceptionScope scope
    ) { 
        return Status.UNKNOWN
            .withDescription(statusRuntimeException.getMessage().replace("UNKNOWN:", "").trim());
    }
    
    @GRpcExceptionHandler
    public Status handle (
        final NullPointerException nullPointerException,
        final GRpcExceptionScope scope
    ) { 
        return Status.UNKNOWN
            .withDescription("500:Internal server error");
    }
}

```