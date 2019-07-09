const {userModel} = require("../../models");

function authenticate(username,password){
    re = new RegExp(username,'i');
    return userModel.findOne({
        username:re,
        password,
    })
}

function currentUser(session){
    if(session.hasOwnProperty('user') && session.user != undefined){
        return session.user;
    }
    else return null;

}

module.exports = {
    authenticate,
    currentUser,
}
