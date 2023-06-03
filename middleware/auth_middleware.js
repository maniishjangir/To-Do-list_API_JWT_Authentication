// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { secret } = require('../config/constants');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Extract the token from the Authorization header
    const authToken = token.split(' ')[1];

    // Verify the JWT token
    const decodedToken = jwt.verify(authToken, secret);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error('Failed to verify token:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
