const sequelize = require("../db")
const User = sequelize.import(__dirname + "/../models/User")
const Group = sequelize.import(__dirname + "/../models/Group")
const bcrypt = require("bcrypt")

User.belongsTo(Group)
User.sync()
function getUsers(req, res){
    User.findAll().then(users => res.json(users))
}

function registerUser(req, res){
    let {email, password, name, group} = req.body
    bcrypt.hash(password, 12, (err, crypted) => {
        User.create({email:email, name:name, password:crypted, groupId:group}).then(() => {
            res.statusCode = 201
            res.json({success:true, message:"user created correctly"})
        })
    })
}

function deleteUser(req, res){
    let id = req.params.id
    User.destroy({where:{id:id}}).then(user => {
        res.statusCode = 200
        res.json({success:true, message:"User deleted succesfully"})
    })
}

module.exports = {
    registerUser,
    getUsers
}