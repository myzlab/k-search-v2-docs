---
title: Spring Boot (JPA)
sidebar_label: Spring Boot (JPA)
---

import K from '@site/src/components/K';

In this section you will learn how to install <K/> in a Spring Boot project with a JPA connection available.

:::caution

<K/> compatibility with JPA is for the sole purpose that you can migrate your existing project from JPA to JDBC.

If you are installing <K/> in a new project, our recommendation is that for performance reasons you use JDBC.

[How to install for JDBC connection?](/docs/get-started/installation/springboot-jdbc)

:::

## Previous requirements

- Have a Spring Boot project in which you want to install <K/>.
- Have JPA installed via the **spring-boot-starter-data-jpa** dependency.

## Step 1: Install K dependency via Maven

Copy the **K** dependency in your pom.xml file, then, force to your project to download dependency.

```xml showLineNumbers
<dependency>
    <groupId>com.myzlab.ksearch.springboot.jpa</groupId>
    <artifactId>k</artifactId>
    <version>2.0.16</version>
</dependency>
```

## Step 2: Tell <K/> where the EntityManager is

To do this, create a class named K that inherits from **com.myzlab.k.KBuilder**. In this class you must make available all the EntityManagers and select one to be used by default.

Assuming that the root package of your project is **com.example**, then you must to create the package **com.example.k** and the new class would be located there.

```java
package com.example.k;

import com.myzlab.k.KBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Component;

@Component//Don't forget it!
public class K extends KBuilder {
    
    public static String EM_WORKSPACE = "EM_WORKSPACE";
    public static String EM_CUSTOMER = "EM_CUSTOMER";
    
    //If you have just one connection, 'unitName' generally is not required
    @PersistenceContext(unitName = "entityManagerWorkspace")
    private EntityManager entityManagerWorkspace;
    
    @PersistenceContext(unitName = "entityManagerCustomer")
    private EntityManager entityManagerCustomer;

    @Override
    public Map<String, EntityManager> getEntityManagers() {
        final Map<String, EntityManager> entityManagers = new HashMap<>();
        
        entityManagers.put(EM_WORKSPACE, entityManagerWorkspace);
        entityManagers.put(EM_CUSTOMER, entityManagerCustomer);
        
        return entityManagers;
    }

    @Override
    public String getEntityManagerDefaultName() {//This EntityManager will be used always by default!
        return EM_WORKSPACE;
    }
}

```

## Ready to use!

With these single steps, you will be able to use the `com.myzlab.k.KBuilder` object via dependency injection. This object will allow you to access all the functionalities that <K/> has for you.

To inject the `com.myzlab.k.KBuilder` object, simply declare this object as an final attribute and then add the **@RequiredArgsConstructor** tag to class as follows:

```java
import com.myzlab.k.KBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ExampleDAK {
    
    private final KBuilder k;

    public void readyToUse() {
        // highlight-next-line
        k. //All you new functionalities start here!
    }
}
```

## What's next?

If this is your first time using <K/>, please read our recommendations in the next section.<br/>
If this is not your case, go ahead and read about the SQL statement you need.