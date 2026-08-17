import movies from "../data/movies.js"


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

export { getAllMovies, getMovieById }