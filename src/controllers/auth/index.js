const {userModel} = require("../models");

function authenticateUser(username,password){
    var user = userModel.find({
        username,
        password,
    });
    if(user){
        return user;
    }
    return null;
}

