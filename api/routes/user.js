const router = require("express").Router()
const controllers = require("../controllers/user")

router.get("/", controllers.getUsers)
router.post("/", controllers.registerUser)

module.exports = router