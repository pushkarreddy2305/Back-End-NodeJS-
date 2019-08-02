const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    ldapId:{
        type:String,
        required:true,
    },
    username:String,
    password:String,
})

var userModel = mongoose.model('user',userSchema);

module.exports = userModel

//userModel.find(function(err,users){
//    if(err){console.log(err)}
//    console.log(users);
//})
//
