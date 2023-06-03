const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {secret} = require('../config/constants');

exports.register = async (req, res) => {
    try{
        const {username, password} = req.body;

        // we will check if the username already exist or not
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(409).json({error: 'Username Already exists'});
        }

        // Hash the Password
        const hashedPassword = await bcrypt.hash(password);

        // Now we will create a new user 
        const user = new User({
            username,
            password: hashedPassword,
        });

        // Now we will save users data to the database
        await user.save();
        res.status(201).json({message: "User Registered Successfully"});

    }catch(error){
        console.error('Failed to register user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
