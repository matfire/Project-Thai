const db = require("../db")
const sequelize = require("sequelize")

module.exports = (db, DataTypes) => {
    return db.define("category", {
        name: DataTypes.STRING
    })
}