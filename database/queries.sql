-- create --
INSERT INTO users
    (email,name)
VALUES
    ("abebe@gmail.com","abebe");

INSERT INTO profiles
    (user_id,bio,country)
VALUES
    (4,"Software engineer","Ethiopia");

INSERT INTO movies
    (title, watched, rating, user_id)
VALUES
    ("Titanic",true,3,4);

INSERT INTO 
    genres (name) 
VALUES
    ('Romance');

INSERT INTO movie_genres 
    (movie_id, genre_id) 
VALUES
    (9, 6);


-- read --

SELECT * FROM users;
SELECT * FROM movies;
SELECT * FROM movies WHERE id=1;
SELECT * FROM movies WHERE watched=true;
SELECT * FROM movies WHERE watched=false;
SELECT * FROM movies WHERE rating>=4;
SELECT * FROM genres;


-- update --

UPDATE users
SET name = "abebe1"
WHERE id = 4;

UPDATE profile
SET country = "Iran"
WHERE id = 4;

UPDATE movies
SET watched = false
WHERE id = 3;

UPDATE movies
SET rating = 5
WHERE id = 3;


-- delete --

DELETE FROM movie_genres 
WHERE (movie_id, genre_id) = (1, 1);

DELETE FROM movies
WHERE id = 1;

-- relationships --

SELECT 
    users.name,
    users.email,
    profiles.bio,
    profiles.country
FROM users
JOIN profiles
ON profiles.user_id = users.id


SELECT 
    users.name,
    movies.title,
    movies.watched,
    movies.rating
FROM movies
INNER JOIN users 
ON movies.user_id = users.id

SELECT
    movies.title,
    genres.name
FROM movies
INNER JOIN movie_genres ON movies.id = movie_genres.movie_id
INNER JOIN genres ON movie_genres.genre_id = genres.id;

-- more --

SELECT * FROM movies
WHERE user_id = 1;

SELECT * FROM movies
WHERE user_id = 1 AND watched = true;

SELECT * FROM movies
WHERE rating >= 4;

SELECT * FROM movies
WHERE genre = Sci-Fi;

SELECT genres.name
FROM genres
JOIN movie_genres ON genres.id = movie_genres.genre_id
JOIN movies ON movie_genres.movie_id = 1;

SELECT DISTINCT users.id, users.name, users.email
FROM users
JOIN movies ON movies.user_id = users.id;

SELECT title, user_id
FROM movies
WHERE watched = false;

SELECT * 
FROM movies
WHERE title ILIKE '%star%';

SELECT * FROM movies
WHERE rating IS NOT NULL
ORDER BY rating DESC
LIMIT 5;

SELECT *
FROM movies
ORDER BY title ASC
LIMIT 5;