DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


/* Create a table for all your burgers*/
CREATE TABLE burgers (
	id INT unsigned AUTO_INCREMENT primary key,
    burger_name VARCHAR(30) UNIQUE NOT NULL,
    devoured BOOLEAN NOT NULL, 
);