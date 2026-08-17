import * as movieService from "../services/movieServices.js"

const getAllMovies = (req, res) => {
    const allMovies = movieService.getAllMovies()

    return res.status(200).json({
        data: allMovies
    })
}

const getMovieById = (req, res) => {
    const id = req.params.id
    const movie = movieService.getMovieById(id)
    if (!movie) {
        return res.status(404).json({ message: "Movie not found." })
    }
    return res.status(200).json({
        data: movie
    })
}

export { getAllMovies, getMovieById }