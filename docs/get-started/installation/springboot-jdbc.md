---
title: Spring Boot (JDBC)
sidebar_label: Spring Boot (JDBC)
---

import K from '@site/src/components/K';

In this section you will learn how to install <K/> in a Spring Boot project with a JDBC connection.

:::info

If you already have a JDBC connection set up, feel free to skip any of the first 3 steps.

:::

## Step 1: Install JDBC dependency through Maven

Add **spring-boot-starter-jdbc** dependency in your pom.xml file and then force to your project to download dependency.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
```

## Step 2: Add connection properties

Add the _jdbcUrl_, _username_ and _password_ properties for each connection you want to configure in the _application.properties_ file:

```
datasource.master.jdbcUrl=jdbc:postgresql://${POSTGRES_HOST:10.0.0.1}:${POSTGRES_PORT:5432}/${POSTGRES_DB:database_name_1}
datasource.master.username=${POSTGRES_USER:database_user_1}
datasource.master.password=${POSTGRES_PASSWORD:database_password_1}

datasource.slave.jdbcUrl=jdbc:postgresql://${POSTGRES_HOST:10.0.0.2}:${POSTGRES_PORT:5432}/${POSTGRES_DB:database_name_2}
datasource.slave.username=${POSTGRES_USER:database_user_2}
datasource.slave.password=${POSTGRES_PASSWORD:database_password_2}
```

:::info

Don't forget that _datasource.master_ and _datasource.slave_ are the names of your connections and will be used in the following step.

:::

## Step 3: Configure datasources and enable transaction management

To achieve this, you need to create a new class with the configuration of all your datasources (It can be in any package), as follows:

```java
package com.example.demo;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.TransactionManagementConfigurer;

@Configuration
@EnableTransactionManagement
public class DatasourceConfig implements TransactionManagementConfigurer {

    @Bean(name = "ds-master")
    @ConfigurationProperties(prefix = "datasource.master")//Name configured in previous step
    public DataSource dataSourceMaster() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "jdbc-master")
    public JdbcTemplate jdbcTemplateMaster(@Qualifier("ds-master") DataSource ds) {
        return new JdbcTemplate(ds);
    }

    @Bean(name = "ds-slave")
    @ConfigurationProperties(prefix = "datasource.slave")//Name configured in previous step
    public DataSource dataSourceSlave() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "jdbc-slave")
    public JdbcTemplate jdbcTemplateSlave(@Qualifier("ds-slave") DataSource ds) {
        return new JdbcTemplate(ds);
    }
    
    //The next code configure and enable transaction management
    @Override
    public PlatformTransactionManager annotationDrivenTransactionManager() {
        return new DataSourceTransactionManager(dataSourceMaster());
    }

    @Bean(name = "txManagerSlave")
    public PlatformTransactionManager annotationDrivenTransactionManagerDataSource2() {
        return new DataSourceTransactionManager(dataSourceSlave());
    }
}
```

:::info

The _jdbc-master_ and _jdbc-slave_ beans will be used in the following step.

:::

## Step 4: Install K dependency through Maven

Add **K** dependency in your pom.xml file and then force to your project to download dependency.

```xml
<dependency>
    <groupId>com.myzlab.ksearch.springboot.jbdc</groupId>
    <artifactId>k</artifactId>
    <version>2.4.3-alpha</version>
</dependency>
```

## Step 5: Tell <K/> where the JdbcTemplate is

To do this, create a class named `K` that inherits from `com.myzlab.k.KBuilder`. In this class you must make available all the JdbcTemplates and select one to be used by default.

Assuming that the root package of your project is **com.example**, then you must to create the package **com.example.k** and the new class would be located there.

```java
package com.example.k;

import com.myzlab.k.KBuilder;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class K extends KBuilder {
    
    public static String JDBC_MASTER = "JDBC_MASTER";
    public static String JDBC_SLAVE = "JDBC_SLAVE";

    @Autowired
    @Qualifier("jdbc-master")//Name configured in previous step
    private JdbcTemplate master;
    
    @Autowired
    @Qualifier("jdbc-slave")//Name configured in previous step
    private JdbcTemplate slave;

    @Override
    public Map<String, JdbcTemplate> getJdbcTemplates() {
        final Map<String, JdbcTemplate> jdbcTemplates = new HashMap<>();
        
        jdbcTemplates.put(JDBC_MASTER, master);
        jdbcTemplates.put(JDBC_SLAVE, slave);
        
        return jdbcTemplates;
    }

    @Override
    public String getJdbcTemplateDefaultName() {
        return JDBC_MASTER;
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
//    @Transactional("txManagerSlave")
    public void readyToUse() {
        // highlight-next-line
        k. //All you new functionalities start here!
    }
}
```

## What's next?

If this is your first time using <K/>, please read our recommendations in the next section.<br/>
If this is not your case, go ahead and read about the SQL statement you need.