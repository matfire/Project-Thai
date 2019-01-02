const db = require("../db")
const sequelize = require("sequelize")

module.exports = (db, DataTypes) => {
    return db.define("group", {
        name: DataTypes.STRING
    })
}