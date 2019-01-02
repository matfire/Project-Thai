const db = require("../db")
const sequelize = require("sequelize")

module.exports = (db, DataTypes) => {
    return db.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    })
}