const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/TO_DO_LIST_API');

const db = mongoose.connection;

console.log("Inside the mongoose js file");

db.on('error', console.error.bind(console, "Error in connecting the database"));

db.once('open', function(){
    console.log("Successfully connected to the Database");
});