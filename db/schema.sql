DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT unsigned AUTO_INCREMENT primary key,
    burger_name VARCHAR(255) UNIQUE NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt timestamp not null 
);