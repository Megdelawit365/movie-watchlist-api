import * as movieService from "../services/movieServices.js"

const getAllMovies = (req, res) => {
    const allMovies = movieService.getAllMovies()

    return res.status(200).json({
        data: allMovies
    })
}

export { getAllMovies }