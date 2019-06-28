const {userModel} = require("../../models");

function authenticate(username,password){
    re = new RegExp(username,'i');
    return userModel.find({
        username:re,
        password,
    })
}

module.exports = {
    authenticate,
}
