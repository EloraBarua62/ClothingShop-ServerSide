// Import files
const jwt = require("jsonwebtoken"); 
exports.generateToken = (userData) => {

    // payload 
    const payload = {
        email: userData.email
    }

    const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: '7 days'
    });

    return token;
}