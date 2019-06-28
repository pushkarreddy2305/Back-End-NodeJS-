'use strict';
const {projectModel} = require("../../models");

function create(name,description){
    var newProj = new projectModel({
        id,
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

async function edit(id,name,description){
    return await projectModel.findOne({_id:id}).exec()
        .then(proj => {
            proj.name = name;
            proj.description = description;
            return proj.save();
        })
        .catch(
            err=> {
                console.log("edit error:", err)
                reject(err);
            }
        );
}

module.exports = {
    create,
    find,
    findAll,
    edit,
}
