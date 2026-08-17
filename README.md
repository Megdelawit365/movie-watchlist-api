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

## Demo

https://github.com/user-attachments/assets/ee77a2b8-153d-4f53-84be-e6ec67bbfb97
