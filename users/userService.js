const userDAO = require('./userDAO')

const getUsers = (users, done)=>{
    userDAO.getUsers(users, done)
}

const findUser = (email, done)=>{
    userDAO.findUser(email, done)
}

const registerUser = (user, done)=>{
    userDAO.registerUser(user, done)
}

module.exports = {
    findUser,
    registerUser
}