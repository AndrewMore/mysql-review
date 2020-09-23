CREATE DATABASE ReviewDB;

USE ReviewDB;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT not null,
  NAME varchar(255) not null,
  RATING INT,
  PRIMARY KEY(id)
);

/* To run this use the following command : mysql -u root -p <schema.sql;