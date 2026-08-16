const notFound = (req, res) => {
    res.status(404).json({
        message: "Path not found."
    })
}

export default notFound