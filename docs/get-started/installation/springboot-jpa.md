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

:::info

If you already have a JPA connection set up, feel free to skip any of the first 3 steps.

:::

## Step 1: Install JPA dependency through Maven

Add **spring-boot-starter-data-jpa** dependency in your pom.xml file and then force to your project to download dependency.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

## Step 2: Add connection properties

Add the _jdbcUrl_, _username_ and _password_ properties for each connection you want to configure in the _application.properties_ file:

```
datasource.master.jdbcUrl=jdbc:postgresql://${POSTGRES_HOST:10.0.0.1}:${POSTGRES_PORT:5432}/${POSTGRES_DB:database_name_1}
datasource.master.username=${POSTGRES_USER:database_user_1}
datasource.master.password=${POSTGRES_PASSWORD:database_password_1}
datasource.master.platform=postgres

datasource.slave.jdbcUrl=jdbc:postgresql://${POSTGRES_HOST:10.0.0.2}:${POSTGRES_PORT:5432}/${POSTGRES_DB:database_name_2}
datasource.slave.username=${POSTGRES_USER:database_user_2}
datasource.slave.password=${POSTGRES_PASSWORD:database_password_2}
datasource.slave.platform=postgres
```

:::info

Don't forget that _datasource.master_ and _datasource.slave_ are the names of your connections and will be used in the following step.

:::

## Step 3: Configure datasources and enable transaction management

To achieve this, you must create for each data source a new class with the corresponding configuration (it can be in any package), as follows:

```java
package com.example.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@PropertySource({"classpath:application.properties"})
public class PersistenceMasterConfiguration {

    public PersistenceMasterConfiguration() {
        super();
    }

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean entityManagerMaster() {
        final LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSourceMaster());
        em.setPackagesToScan("com.example.entities");//Here you must place the package
                                                     //where your entities are located
        final HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);

        return em;
    }

    @Bean
    @ConfigurationProperties(prefix = "datasource.master")
    public DataSource dataSourceMaster() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public PlatformTransactionManager transactionManagerMaster() {
        final JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerMaster().getObject());

        return transactionManager;
    }
}

```

```java
package com.example.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@PropertySource({"classpath:application.properties"})
public class PersistenceSlaveConfiguration {

    public PersistenceSlaveConfiguration() {
        super();
    }

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean entityManagerSlave() {
        final LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSourceSlave());
        em.setPackagesToScan("com.example.entities");//Here you must place the package
                                                     //where your entities are located
        final HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);

        return em;
    }

    @Bean
    @ConfigurationProperties(prefix = "datasource.slave")
    public DataSource dataSourceSlave() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public PlatformTransactionManager transactionManagerSlave() {
        final JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerSlave().getObject());

        return transactionManager;
    }
}

```

:::info

The _entityManagerMaster_ and _entityManagerSlave_ beans will be used in the following step.

:::

## Step 4: Install K dependency through Maven

Add **K** dependency in your pom.xml file and then force to your project to download dependency.

```xml
<dependency>
    <groupId>com.myzlab.ksearch.springboot.jpa</groupId>
    <artifactId>k</artifactId>
    <version>2.4.9-alpha</version>
</dependency>
```

## Step 2: Tell <K/> where the EntityManager is

To do this, create a class named `K` that inherits from `com.myzlab.k.KBuilder`. In this class you must make available all the EntityManagers and select one to be used by default.

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
    
    public static String EM_MASTER = "EM_MASTER";
    public static String EM_SLAVE = "EM_SLAVE";
    
    //If you have just one connection, 'unitName' generally is not required
    @PersistenceContext(unitName = "entityManagerMaster")
    private EntityManager entityManagerMaster;
    
    @PersistenceContext(unitName = "entityManagerSlave")
    private EntityManager entityManagerSlave;

    @Override
    public Map<String, EntityManager> getEntityManagers() {
        final Map<String, EntityManager> entityManagers = new HashMap<>();
        
        entityManagers.put(EM_MASTER, entityManagerMaster);
        entityManagers.put(EM_SLAVE, entityManagerSlave);
        
        return entityManagers;
    }

    @Override
    public String getEntityManagerDefaultName() {//This EntityManager will be used always by default!
        return EM_MASTER;
    }
}

```

## Ready to use!

With these single steps, you will be able to use the `com.myzlab.k.KBuilder` object through dependency injection. This object will allow you to access all the functionalities that <K/> has for you.

To inject the `com.myzlab.k.KBuilder` object, simply declare this object as an final attribute and then add the **@RequiredArgsConstructor** tag to class as follows:

```java
import com.myzlab.k.KBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
// import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
public class ExampleDAK {
    
    private final KBuilder k;

//    @Transactional
    public void readyToUse() {
        // highlight-next-line
        k. //All you new functionalities start here!
    }
}
```

## What's next?

If this is your first time using <K/>, please read our recommendations in the next section.<br/>
If this is not your case, go ahead and read about the SQL statement you need.