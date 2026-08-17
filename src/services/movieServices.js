import movies from "../data/movies.js"
let id = 2

const getAllMovies = () => {
    const filteredMovies = [...movies]

    if ("watched" in req.query) {
        const watched = req.query.watched
        filteredMovies = filteredMovies.filter(m => String(m.watched) === watched)
    }
    if ("genre" in req.query) {
        const genre = req.query.genre
        filteredMovies = filteredMovies.filter(m => String(m.genre) === genre)

    }
    if ("search" in req.query) {
        const search = req.query.search
        filteredMovies = filteredMovies.filter(m => search in String(m.title))
    }

    return filteredMovies
}

const getMovieById = (id) => {
    const movie = movies.find(m => m.id === Number(id))
    if (!movie) {
        return null
    }
    return movie
}

const updateMovie = (body, movie) => {
    for (const [k, v] of Object.entries(req.body)) {
        movie[k] = v
    }
    return movie
}
const createMovie = (body) => {
    const title = body.title
    const genre = body.genre
    const watched = body.watched
    const rating = body.rating

    const newMovie = {
        "id": id,
        "title": title,
        "genre": genre,
        "watched": watched,
        "rating": rating
    }
    movies.push(newMovie)
    id++

    return newMovie
}
const deleteMovie = (id) => {
    const movie = movies.find(m => m.id === Number(id))
    if (!movie) {
        return null
    }
    movies = movies.filter(m => String(m.id) !== id)
    return true
}

export { getAllMovies, getMovieById, updateMovie, createMovie, deleteMovie }