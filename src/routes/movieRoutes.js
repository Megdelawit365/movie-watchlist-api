import { Router } from "express";
import requireApiKey from "../middlewares/requireApiKey.js";
import { createMovie, deleteMovie, getAllMovies, getMovieById } from "../controllers/movieControllers.js";
import { updateMovie } from "../services/movieServices.js";
import { validateMovie, validateUpdate } from "../middlewares/validateMovie.js";

const router = Router()

router.get("/", getAllMovies)
router.get("/:id", getMovieById)
router.patch("/:id", requireApiKey, validateUpdate, updateMovie)
router.post("/", requireApiKey, validateMovie, createMovie)
router.delete("/:id", requireApiKey, deleteMovie)

export default router