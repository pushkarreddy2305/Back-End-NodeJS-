'use strict';
const { user } = require("../models");
const query = require("mongoose").query;

function create(username,groups){
    var newUser = new userModel({
        username,
        groups,
    });
    newUser.save();
    return newUser;
}

function getTest(username) {
    try {
        return {
            'message': 'Logged in as: ' + username
        };
    } catch (err) {
        return {
            "error": err.message
        };
    }
}

function find(search){
    var regex = new RegExp(search,'i');
    return user.find({username:regex}).exec();
}

function findAll(){
    return user.find().exec();
}

module.exports = {
    create,
    getTest,
    find,
    findAll
};
