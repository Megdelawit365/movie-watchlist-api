import { Router } from "express";
import movies from "../data/movies.js"

const router = Router()

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
router.patch("/:id", (req, res) => { })
router.post("/", (req, res) => { })
router.delete("/:id", (req, res) => { })

export { router }