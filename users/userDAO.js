const users = require('./users.json')
const fs = require('fs')


const getUsers = (users, done)=>{
    return done(undefined, users)
}

const findUser = (email, done)=>{
    const userFetched = users.find(user => user.email === email)
    return done(undefined, userFetched)
}

const registerUser =(user, done)=>{
    users.push(user)
    fs.writeFileSync('./users.json', JSON.stringify(users))
    return done(undefined, user)
}
module.exports = {
    getUsers,
    findUser,
    registerUser
}

