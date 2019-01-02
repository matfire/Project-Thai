const sequelize = require("../db")
const Cat = sequelize.import(__dirname + "/../models/Category")



Cat.sync()
