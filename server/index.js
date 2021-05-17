const express = require("express")
const app = express()
const logger = require("morgan")
app.use(logger("dev"))
// parse the body
app.use(express.json())


const connectDB = require("./config/db")
connectDB()

const cors = require("cors")
app.use(cors())
const port = process.env.PORT || 5000

// import routes from file
const articleRoutes = require("./routes/articleRoutes")
// 1st argument - specifies path prefix
// 2nd argument - specifies routes to be used
app.use("/articles", articleRoutes)

app.get("/", (req, res) =>
  res.json({message: "Home route!"})
)

app.listen(port, () => console.log(`App listening on port ${port}`))