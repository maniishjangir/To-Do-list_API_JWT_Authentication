const express = require('express');
const port = 8000;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// we need to import the mongoose file from the config folder to save the data to our database
const db = require('./config/mongoose');

const app = express();

app.listen(port, (err) => {
        if(err){
            console.log(`Error in Running the server on port: ${port} and Error is : ${err}`);
        }

        console.log(`Successfully running server on port : ${port}`);
});