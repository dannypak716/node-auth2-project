const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require("../secrets");

function tokenBuilder(req.user){
    const payload = {
        subject: req.user.user_id,
        role_name: req.user.role_name,
        username: req.user.username,
    }
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, JWT_SECRET, options)
}


module.exports = {
    tokenBuilder
}
