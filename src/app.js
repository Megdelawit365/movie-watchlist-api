import notFound from "./middlewares/notFound.js"
import { express } from express
import { movieRoutes } from "./routes/movieRoutes.js"
import { requestLogger } from "./middlewares/requestLogger.js"

const app = express()

app.use(express.json())
app.use(requestLogger)
app.use("/api/movies", movieRoutes)
app.use(notFound)

export default app