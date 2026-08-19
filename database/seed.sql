INSERT INTO users 
    (email,name)
VALUES
    ('Amina', 'amina@example.com'),
    ('Abel', 'abel@example.com'),
    ('Sofia', 'sofia@example.com');


INSERT INTO profiles 
    (user_id, bio, country) 
VALUES
    (1, 'Backend developer.', 'Ethiopia'),
    (2, 'Tech lover.', 'Kenya'),
    (3, 'UI designer.', 'Ethiopia');


INSERT INTO movies 
    (title, watched, rating, user_id) 
VALUES
    ('Interstellar', true, 5, 1),
    ('Arrival', false, NULL, 1),
    ('Dune', true, 4, 1),
    ('Parasite', true, 5, 2),
    ('Inception', true, 4, 2),
    ('The Matrix', false, NULL, 2),
    ('Spirited Away', true, 5, 3),
    ('Gladiator', false, NULL, 3);


INSERT INTO 
    genres (name) 
VALUES
    ('Sci-Fi'),
    ('Drama'),
    ('Adventure'),
    ('Action'),
    ('Thriller');

INSERT INTO movie_genres 
    (movie_id, genre_id) 
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 2),
    (3, 1),
    (3, 3),
    (4, 2),
    (4, 5),
    (5, 1),
    (5, 5),
    (6, 1),
    (7, 3);