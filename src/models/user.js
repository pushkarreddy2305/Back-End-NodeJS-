const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    roles:    [String],
    groups:   [String],
})

userModel = mongoose.model('user',userSchema);

module.exports = userModel

//userModel.find(function(err,users){
//    if(err){console.log(err)}
//    console.log(users);
//})
//
