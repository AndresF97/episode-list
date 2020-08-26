DROP DATABASE IF EXISTS episode_db;

CREATE DATABASE episode_db;

USE episode_db;


CREATE TABLE episode(
    id INTEGER NOT NULL AUTO_INCREMENT,
    show_name VARCHAR(100),
    episode_name VARCHAR(100),
    watched BOOLEAN DEFAULT true,
    memo VARCHAR(500),
    PRIMARY KEY(id)
);
INSERT INTO episode (show_name,episode_name,memo) VALUES ("HOUSE MD","WILSON HEART HOUSES MIND","Sad");
INSERT INTO episode (show_name,episode_name,memo) VALUES ("My Hero Academia","Red Riot","awesome");
INSERT INTO episode (show_name,episode_name,memo) VALUES ("The Man in the highcastle","pilot","want to watch more");
INSERT INTO episode (show_name,episode_name,memo) VALUES ("Archer","pilot","Funny");
