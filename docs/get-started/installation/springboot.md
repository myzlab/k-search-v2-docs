---
title: Spring Boot
sidebar_label: Spring Boot
---

import K from '@site/src/components/K';

In this section you will learn how to install <K></K> library in a Spring Boot project.

## Previous requirements

- Have a Spring Boot project in which you want to install <K></K>.
- Have JPA installed via the **spring-boot-starter-data-jpa** dependency.

## Step 1: Install K-Spring dependency via Maven

Copy the **K-Spring** dependency in your pom.xml file, then, force to your project to download dependency.

```xml showLineNumbers
<dependency>
    <groupId>com.myzlab</groupId>
    <artifactId>K-Spring</artifactId>
    <version>1.1.38</version>
</dependency>
```

## Step 2: Tell <K></K> where the entity manager is

To do this, create a class K that inherits from **ve.zlab.k.KSearch** and implements **ve.zlab.k.KExecutor**.

Assuming that the root package of your project is **com.example**, then you must to create the package **com.example.k** and the new class would be located there.

```java showLineNumbers
// highlight-next-line
package com.example.k;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Component;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KSearch;

@Component //Don't forget it!
public class K extends KSearch implements KExecutor {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

}
```

## Ready to use!

With these single steps, you will be able to use the KExecutor object via dependency injection. This object will allow you to access all the functionalities that <K></K> has for you.

To inject the KExecutor object, simply declare this object as an attribute and then add the @Autowired tag as follows:

```java showLineNumbers
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ve.zlab.k.KExecutor;

@Repository
public class MyClass {

    // highlight-start
    @Autowired
    private KExecutor k;
    // highlight-end

    public void readyToUse() {
        // highlight-next-line
        k. // Use me!
    }
}
```

## What's next?

If this is your first time using <K></K>, please read our recommendations in the next section.<br/>
If this is not your case, go ahead and read about the SQL statement you need.