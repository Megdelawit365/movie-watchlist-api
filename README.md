# Movie Watchlist API

A simple Express.js API for managing a list of movies. Built using routes, controllers, and services to keep the code organized.

## Features

- **Get movies**: View all movies or look up one by its ID.
- **Filter movies**: Search by title, genre or watched status using URL query parameters.
- **Protect routes**: Requires an API key to add, edit or delete movies.
- **Input validation**: Checks if sent data is correct before saving it.
- **Non existing routes**: Sends a clear error message if a route doesn't exist.

---

## How to Run

**Clone repo**:

```bash
git clone https://github.com/Megdelawit365/movie-watchlist-api
cd movie-watchlist-api
```

**Install dependencies and start server**:

```bash
npm install
npm run dev
```

## Project structure

```bash
movie-watchlist-api/
|
|-- package.json
|-- README.md
`-- src/
    |-- server.js
    |-- app.js
    |-- controllers/
    |   `-- movieControllers.js
    |-- services/
    |   `-- movieServices.js
    |-- data/
    |   `-- movies.js
    |-- routes/
    |   `-- movieRoutes.js
    `-- middleware/
        |-- requestLogger.js
        |-- validateMovie.js
        |-- requireApiKey.js
        `-- notFound.js 
```

## API routes

- GET    /api/movies      # Get all movies 
- GET    /api/movies/:id  # Get movie by ID
- POST   /api/movies      # Add a new movie (requires API key)
- PATCH  /api/movies/:id  # Update a movie (requires API key)
- DELETE /api/movies/:id  # Delete a movie (requires API key)

## Database Design

### Tables Overview

- users
  - Purpose: Stores user accounts.
  - Primary Key: id
  - Foreign Keys: None

- profiles
  - Purpose: Stores profile information of users.
  - Primary Key: id
  - Foreign Keys: user_id (references users.id)

- movies
  - Purpose: Stores movies added to user watchlists.
  - Primary Key: id
  - Foreign Keys: user_id (references users.id)

- genres
  - Purpose: Stores movie genres.
  - Primary Key: id
  - Foreign Keys: None

- movie_genres
  - Purpose: table connecting movies to their genres.
  - Primary Key:  (movie_id, genre_id)
  - Foreign Keys: movie_id (references movies.id), genre_id (references genres.id)

---

### Database relationships

- One-to-one (users - profiles)
  - Each user has only one profile. 

- One-to-many (users - movies)
  - one user can add multiple movies to their watchlist, but each movie belongs to one user. 

- Many-to-many (movies - genres)
  - A movie can belong to multiple genres, and a genre can contain multiple movies.

## Demo

https://github.com/user-attachments/assets/ee77a2b8-153d-4f53-84be-e6ec67bbfb97
