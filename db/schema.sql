DROP DATABASE IF EXISTS episode_db;

CREATE DATABASE episode_db;

USE episode_db;


CREATE TABLE episode(
    id INTEGER NOT NULL AUTO_INCREMENT,
    show_name VARCHAR(100),
    episode_name VARCHAR(100),
    watched BOOLEAN DEFAULT true,
    show_logo VARCHAR(600),
    memo VARCHAR(500),
    PRIMARY KEY(id)
);
INSERT INTO episode (show_name,episode_name,memo,show_logo) VALUES ("HOUSE MD","WILSON HEART HOUSES MIND","Sad","https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg");
INSERT INTO episode (show_name,episode_name,memo,show_logo) VALUES ("My Hero Academia","Red Riot","awesome","https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg");
INSERT INTO episode (show_name,episode_name,memo,show_logo) VALUES ("The Man in the highcastle","pilot","want to watch more","https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_SX300.jpg");
INSERT INTO episode (show_name,episode_name,memo,show_logo) VALUES ("Archer","pilot","Funny","https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_SX300.jpg");
