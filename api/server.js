const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser')
let userRouter = require("./routes/user")
const db = require("./db")


db.authenticate().then(() => console.log("db connected"))
let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use("/users", userRouter)


app.listen(4000, () => console.log("online"))