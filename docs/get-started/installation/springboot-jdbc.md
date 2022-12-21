---
title: Spring Boot (JDBC)
sidebar_label: Spring Boot (JDBC)
---

import K from '@site/src/components/K';

In this section you will learn how to install <K/> in a Spring Boot project with a JDBC connection available.

## Previous requirements

- Have a Spring Boot project in which you want to install <K/>.
- Have JPA installed via the **spring-boot-starter-jdbc** dependency.

## Step 1: Install K dependency via Maven

Copy the **K** dependency in your pom.xml file, then, force to your project to download dependency.

```xml showLineNumbers
<dependency>
    <groupId>com.myzlab.ksearch.springboot.jbdc</groupId>
    <artifactId>k</artifactId>
    <version>2.0.12</version>
</dependency>
```

## Step 2: Tell <K/> where the JdbcTemplate is

To do this, create a class named K that inherits from **com.myzlab.k.KBuilder**. In this class you must make available all the JdbcTemplates and select one to be used by default.

Assuming that the root package of your project is **com.example**, then you must to create the package **com.example.k** and the new class would be located there.

```java showLineNumbers
// highlight-next-line
package com.example.k;

import com.myzlab.k.KBuilder;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component//Don't forget it!
public class K extends KBuilder {
    
    public static String JDBC_WORKSPACE = "JDBC_WORKSPACE";
    public static String JDBC_CUSTOMER = "JDBC_CUSTOMER";

    @Autowired
    @Qualifier("jdbcTemplateWorkspace")
    private JdbcTemplate jdbcTemplateWorkspace;
    
    @Autowired
    @Qualifier("jdbcTemplateCustomer")
    private JdbcTemplate jdbcTemplateCustomer;

    @Override
    public Map<String, JdbcTemplate> getJdbcTemplates() {
        final Map<String, JdbcTemplate> jdbcTemplates = new HashMap<>();
        
        jdbcTemplates.put(JDBC_WORKSPACE, jdbcTemplateWorkspace);
        jdbcTemplates.put(JDBC_CUSTOMER, jdbcTemplateCustomer);
        
        return jdbcTemplates;
    }

    @Override
    public String getJdbcTemplateDefaultName() {//This JdbcTemplate will be used always by default!
        return JDBC_WORKSPACE;
    }
}

```

## Ready to use!

With these single steps, you will be able to use the `com.myzlab.k.KBuilder` object via dependency injection. This object will allow you to access all the functionalities that <K/> has for you.

To inject the `com.myzlab.k.KBuilder` object, simply declare this object as an final attribute and then add the **@RequiredArgsConstructor** tag to class as follows:

```java showLineNumbers
import com.myzlab.k.KBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ExampleDAK {
    
    private final KBuilder k;

    public void readyToUse() {
        // highlight-next-line
        k. //All power is here!
    }
}
```

## What's next?

If this is your first time using <K/>, please read our recommendations in the next section.<br/>
If this is not your case, go ahead and read about the SQL statement you need.