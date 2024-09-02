const userService = require('../users/userService');
const authService = require('./authService');

const registerUser= (user, done)=>{
    userService.registerUser(user, done)
}
module.exports = {registerUser}