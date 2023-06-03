const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://manishjangir05012001:12345@cluster0.r5nvte5.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

//
const db = mongoose.connection;

console.log("Inside the mongoose.js file");
db.on('error', console.error.bind(console, "error in connecting the Database"));
db.once('open', function(){
    console.log("Succesfully connected to the Database");
});

module.exports = db;