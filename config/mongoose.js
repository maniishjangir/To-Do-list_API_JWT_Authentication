const mongoose = require('mongoose');
mongoose.connect('mongodb:/127.0.0.1/TO_DO_LIST_API', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

console.log("Inside the mongoose.js file");
db.on('error', console.error.bind(console, "error in connecting the Database"));
db.once('open', function(){
    console.log("Succesfully connected to the Database");
});

module.exports = db;