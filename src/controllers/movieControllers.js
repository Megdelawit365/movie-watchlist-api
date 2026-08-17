import * as movieService from "../services/movieServices.js"

const getAllMovies = (req, res) => {
    const queries = req.query
    const allMovies = movieService.getAllMovies(queries)

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

const updateMovie = (req, res) => {
    const movie = req.movie
    const body = req.body
    const updatedMovie = movieService.updateMovie(body, movie)

    return res.status(200).json({
        message: "Movie updated successfully.",
        data: updateMovie
    })

}

const createMovie = (req, res) => {
    const body = req.body
    const newMovie = movieService.createMovie(body)
    return res.status(201).json({
        message: "Movie created successfully",
        data: newMovie
    })
}

const deleteMovie = (req, res) => {
    const movie = movieService.deleteMovie(req.params.id)
    if (!movie) {
        return res.status(404).json({ message: "Movie not found." })
    }
    return res.status(204).send()
}

export { getAllMovies, getMovieById, updateMovie, createMovie, deleteMovie }