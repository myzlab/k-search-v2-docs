---
title: Glassfish / WildFly
sidebar_label: Glassfish / WildFly
---

import K from '@site/src/components/K';

In this section you will learn how to install <K></K> library in a Glassfish or WildFly project.

## Previous requirements

- Have a Glassfish or WildFly project in which you want to install <K></K>.
- Have JPA installed via the **eclipselink** dependency.

## Step 1: Install K-Spring dependency via Maven

Copy the **K-Spring** dependency in your pom.xml file, then, force to your project to download dependency.

```xml showLineNumbers
<dependency>
    <groupId>com.myzlab</groupId>
    <artifactId>K</artifactId>
    <version>1.1.38</version>
</dependency>
```

## Step 2: Tell <K></K> where the entity manager is

To do this, create a class K that inherits from **ve.zlab.k.KSearch** and implements **ve.zlab.k.KExecutor**.

Assuming that the root package of your project is **com.example**, then you must to create the package **com.example.k** and the new class would be located there.

```java showLineNumbers
// highlight-next-line
package com.example.k;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import ve.zlab.k.KExecutor;
import ve.zlab.k.KSearch;

@Stateless
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

With these single steps, you will be able to use the KExecutor object via ejb injection. This object will allow you to access all the functionalities that <K></K> has for you.

To inject the KExecutor object, simply declare this object as an attribute and then add the @EJB tag as follows:

```java showLineNumbers
import javax.ejb.EJB;
import javax.ejb.Stateless;
import ve.zlab.k.KExecutor;

@Stateless //Don't forget it!
public class MyClass {

    // highlight-start
    @EJB
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