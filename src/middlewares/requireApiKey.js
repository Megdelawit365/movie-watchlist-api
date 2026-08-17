const requireApiKey = (req, res, next) => {
    const apiKey = req.headers["x-api-key"]
    if (!apiKey || apiKey != "movie-class-2026") {
        return res.status(403).json({
            message: "Api key is missing or incorrect."
        })
    }
    next()
}

export default requireApiKey