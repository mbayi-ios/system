const express  = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const routes = require("./routes")
const app = express() 

app.use(cors())
app.use(express.json())

app.use("/api", routes);

app.get("/", (req, res) => {
    res.json({message: "Welcome to system app"})
    console.log(routes)
})

module.exports = app;