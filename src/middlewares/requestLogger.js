const requestLogger = (req, res, next) => {
    console.log(req.method, req.path)
    next()
}

export { requestLogger }