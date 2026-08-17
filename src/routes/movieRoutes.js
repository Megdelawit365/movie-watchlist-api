import { Router } from "express";
import { validateUpdate, validateMovie } from "../middlewares/validateMovie.js"
import requireApiKey from "../middlewares/requireApiKey.js";
import { createMovie, deleteMovie, getAllMovies, getMovieById } from "../controllers/movieControllers.js";
import { updateMovie } from "../services/movieServices.js";

const router = Router()
const id = 1

router.get("/", getAllMovies)
router.get("/:id", getMovieById)
router.patch("/:id", requireApiKey, validateUpdate, updateMovie)
router.post("/", requireApiKey, validateMovie, createMovie)
router.delete("/:id", requireApiKey, deleteMovie)

export { router }