const validateUpdate = (req, res, next) => {
    const title = req.body.title
    const id = req.body.id
    const genre = req.body.genre
    const watched = req.body.watched
    const rating = req.body.rating

    const movie = movies.find(m => m.id === Number(id))
    if (!movie) {
        return res.status(404).json({ message: "Movie not found." })
    }

    if (title != undefined && (title.trim() === "" || typeof (title) != "string")) {
        return res.status(400).json({
            message: "Invalid title."
        })
    }
    if (id != undefined) {
        return res.status(400).json({
            message: "Id cannot be updated."
        })
    }
    if (genre != undefined && (genre.trim() === "" || typeof (genre) != "string")) {
        return res.status(400).json({
            message: "Invalid genre."
        })
    }
    if (watched != undefined && typeof (watched) != "boolean") {
        return res.status(400).json({
            message: "Invalid watched status."
        })
    }
    if (rating != undefined && (typeof (rating) != "number" || rating < 1 || rating > 5)) {
        return res.status(400).json({
            message: "Invalid rating."
        })
    }

    req.movie = movie
    next()

}

const validateMovie = (req, res, next) => {
    const title = req.body.title
    const genre = req.body.genre
    const watched = req.body.watched
    const rating = req.body.rating


    if (title === undefined || title.trim() === "" || typeof (title) != "string") {
        return res.status(400).json({
            message: "Invalid title."
        })
    }

    if (genre === undefined || (genre.trim() === "" || typeof (genre) != "string")) {
        return res.status(400).json({
            message: "Invalid genre."
        })
    }
    if (watched === undefined || typeof (watched) != "boolean") {
        return res.status(400).json({
            message: "Invalid watched status."
        })
    }
    if (rating === undefined || (typeof (rating) != "number" || rating < 1 || rating > 5)) {
        return res.status(400).json({
            message: "Invalid rating."
        })
    }

    next()
}

export { validateUpdate, validateMovie }