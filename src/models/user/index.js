const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    ldapId:{
        type:String,
        required:true,
    }
})

var userModel = mongoose.model('user',userSchema);

module.exports = userModel

//userModel.find(function(err,users){
//    if(err){console.log(err)}
//    console.log(users);
//})
//
