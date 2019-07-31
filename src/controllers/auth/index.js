const {user} = require("../../models");

function authenticate(username,password){
    let re = new RegExp(username,'i');
    return user.findOne({
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
