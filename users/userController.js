const userService = require('./userService');

const getUsers = (users, done)=>{
    userService.getUsers(users, done)
}

const findUser = (email, done)=>{
    userService.findUser(email, done)
}
const registerUser = (user, done)=>{
    userService.registerUser(user, done)
}

module.exports ={
    findUser,
    registerUser
}