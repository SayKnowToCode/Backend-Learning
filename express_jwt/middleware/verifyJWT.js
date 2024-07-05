const jwt = require('jsonwebtoken');
require('dotenv').config(); // used to load variables from an .env file

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // We are seeing if the HTTP headers contains authorization, if yes then we proceed

    if (!authHeader) return res.sendStatus(401); // 401 - Unauthorized
    console.log(authHeader); // Bearer token
    const token = authHeader.split(' ')[1];

    // Authorization Header looks like -----> Authorization : Bearer HexCode
    // Hence we split on ' ' and take the HexCode at 1 position
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded.username;
            next();
        }
    );
}

module.exports = verifyJWT