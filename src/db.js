const mongoose  = require("mongoose");
const userModel = require("./models/user");
const projectModel = require("./models/project");

const url       = "mongodb://localhost:27017"
const dbname    = "EmployerHolding"

mongoose.connect(url+"/"+dbname, {useNewUrlParser:true});

var db = mongoose.connection

db.on('error',console.error.bind(console, "connection error: "));
db.once('open',function(){
    console.log("connected");
});

module.exports = {
    db,
    userModel,
    projectModel
}

