CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(120) NOT NULL
);

CREATE TABLE profiles(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) UNIQUE,
    bio VARCHAR(255),
    country VARCHAR(255)
);

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    watched BOOLEAN NOT NULL DEFAULT false,
    rating INTEGER CHECK( rating IS NULL OR rating BETWEEN 1 AND 5),
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE genres(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movie_genres(
    movie_id INTEGER REFERENCES movies(id),
    genre_id INTEGER REFERENCES genres(id),
    PRIMARY KEY (movie_id,genre_id) 
);