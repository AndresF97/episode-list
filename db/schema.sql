DROP DATABASE IF EXISTS episode_db;

CREATE DATABASE episode_db;

USE episode_db;


CREATE TABLE episode(
    id INTEGER NOT NULL AUTO_INCREMENT,
    show_name VARCHAR(100),
    episode_name VARCHAR(100),
    watched BOOLEAN DEFAULT false,
    show_logo VARCHAR(600),
    show_plot VARCHAR(800),
    memo VARCHAR(500),
    PRIMARY KEY(id)
);
INSERT INTO episode (show_name,episode_name,memo,show_logo,show_plot) VALUES ("HOUSE MD","WILSON HEART HOUSES MIND","Sad","https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.");
INSERT INTO episode (show_name,episode_name,memo,show_logo,show_plot) VALUES ("My Hero Academia","Red Riot","awesome","https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.");
INSERT INTO episode (show_name,episode_name,memo,show_logo,show_plot) VALUES ("The Man in the highcastle","pilot","want to watch more","https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_SX300.jpg","In a dystopian America dominated by Nazi Germany and Imperial Japan, a young woman discovers a mysterious film that may hold the key to toppling the totalitarian regimes.");
INSERT INTO episode (show_name,episode_name,memo,show_logo,show_plot) VALUES ("Archer","pilot","Funny","https://m.media-amazon.com/images/M/MV5BMTg3NTMwMzY2OF5BMl5BanBnXkFtZTgwMDcxMjQ0NDE@._V1_SX300.jpg","Covert black ops and espionage take a back seat to zany personalities and relationships between secret agents and drones.");
