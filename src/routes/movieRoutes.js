import { Router } from "express";
import movies from "../data/movies.js"
import { validateUpdate, validateMovie } from "../middlewares/validateMovie.js"

const router = Router()
const id = 1

router.get("/", (req, res) => {
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

    return res.status(200).json({
        data: filteredMovies
    })
})
router.get("/:id", (req, res) => {
    const id = req.params.id
    const movie = movies.find(m => m.id === Number(id))
    if (!movie) {
        return res.status(404).json({ message: "Movie not found." })
    }
    return res.status(200).json({
        data: movie
    })
})
router.patch("/:id", validateUpdate, (req, res) => {
    const movie = req.movie
    for (const [k, v] of Object.entries(req.body)) {
        movie[k] = v
    }
    return res.status(200).json({
        message: "Movie updated successfully.",
        data: movie
    })

})
router.post("/", validateMovie, (req, res) => {
    const title = req.body.title
    const genre = req.body.genre
    const watched = req.body.watched
    const rating = req.body.rating
    const newMovie = {
        "id": id,
        "title": title,
        "genre": genre,
        "watched": watched,
        "rating": rating
    }
    movies.push(newMovie)
    id++
    return res.status(201).json({
        message: "Movie created successfully",
        data: newMovie
    })
})
router.delete("/:id", (req, res) => {
    const movie = movies.find(m => m.id === Number(id))
    if (!movie) {
        return res.status(404).json({ message: "Movie not found." })
    }
    movies = movies.filter(m => String(m.id) !== req.params.id)
    return res.status(204)
})

export { router }