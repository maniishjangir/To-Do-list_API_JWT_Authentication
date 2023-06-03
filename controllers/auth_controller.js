const User = require('../models/User');
const jwt = require('jsonwebtoken');

const { secret } = require('../config/constants');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Create a new user with the plain text password
    const user = new User({
      username: username,
      password, // Store the plain text password directly (not recommended)
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to register user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
};

module.exports = {
  register,
};

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // we need to find the user in our database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid Username/Password' });
    }

    // verify password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid Username/Password' });
    }

    // Generate JWT Tokens here
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Failed to login:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};
