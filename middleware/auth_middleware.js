const jwt = require('jsonwebtoken');
const { secret } = require('../config/constants');

module.exports = (req, res, next) => {
    const taken = req.headers.authorization;
}

if(!token){
    return res.status(401).json({error: 'Unauthorized'});
}

try{
        // verify the JWT Token
        const decodedToken = jwt.verify(token, secret);
        req.userId = decodedToken.userId;
        next();
    }catch(error){
        console.error('Failed to Verify Token: ', error);
        res.status(401).json({error: 'Unauthorized'});
    }