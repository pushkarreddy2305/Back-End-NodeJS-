'use strict';
const {projectModel} = require("../../models");

function create(name,description){
    var newProj = new projectModel({
        name,
        description,
    })
    newProj.save();
    return newProj;
}

function findAll(){
    return projectModel.find().exec();
}

function find(search){
    var regex = new RegExp(search,'i');
    return projectModel.find({
        $or:[
            {description:regex},
            {name:regex}
        ]
    }).exec();
}

module.exports = {
    create,
    find,
    findAll,
}
