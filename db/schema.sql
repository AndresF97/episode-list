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
INSERT INTO episode (show_name,episode_name) VALUES ("HOUSE MD","WILSON HEART HOUSES MIND");
INSERT INTO episode (show_name,episode_name) VALUES ("My Hero Academia","Red Riot");
INSERT INTO episode (show_name,episode_name) VALUES ("The Man in the highcastle","pilot");
INSERT INTO episode (show_name,episode_name) VALUES ("Archer","pilot");
