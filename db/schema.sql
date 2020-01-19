DROP DATABASE IF EXISTS episode_db;

CREATE DATABASE episode_db;

USE episode_db;


CREATE TABLE episode(
    id INTEGER NOT NULL AUTO_INCREMENT,
    show_name VARCHAR(100),
    episode_name VARCHAR(100),
    watched TINYINT(1) NOT NULL Default"1",
    PRIMARY KEY(id)
);
