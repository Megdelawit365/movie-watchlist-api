import movies from "../data/movies.js"
let id = 2

const getAllMovies = (query) => {
    let filteredMovies = [...movies]

    if ("watched" in query) {
        const watched = query.watched
        filteredMovies = filteredMovies.filter(m => String(m.watched) === watched)
    }
    if ("genre" in query) {
        const genre = query.genre
        filteredMovies = filteredMovies.filter(m => String(m.genre) === genre)

    }
    if ("search" in query) {
        const search = query.search
        filteredMovies = filteredMovies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
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
    for (const [k, v] of Object.entries(body)) {
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
    const index = movies.findIndex(m => m.id === Number(id))
    if (index === -1) {
        return null
    }
    movies.splice(index, 1)
    return true
}

export { getAllMovies, getMovieById, updateMovie, createMovie, deleteMovie }