---
title: Mastering JOOQ
date: 
created: 
draft: true
cssclasses:
aliases: 
  - 
tags: [programming, JOOQ, ORM]
---

Recently, I have been learning how to migrate an existing Spring Boot application custom Object Relational Mapping (ORM) to using JOOQ. I said a lot of words and some that I am still trying to understand. To get (hopefully) the easy one out of the way, Spring Boot is the framework used in building RESTful APIs (representational state transfer application programming interfaces) using the Java programming language. Basically, when you access the internet site as a user, you have information that you store somewhere in a database. APIs will help you to retrieve that data to see on the computer screen. That data can be created, manipulated and deleted. APIs help with all of that. 

An ORM is how your data can be converted from the programming language into data stored in a data base and vice versa. In my instance, I am using PostgreSQL for the data base and SQL is used to make queries for any specific data that you want to retrieve. In the past and learning Spring Boot, I only have used Java Persistence API or JPA