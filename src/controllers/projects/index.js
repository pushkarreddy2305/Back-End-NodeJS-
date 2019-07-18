"use strict";
const { project } = require("../../models");

function create(name, description) {
  var newProj = new project({
    name,
    description
  });
  newProj.save();
  return newProj;
}

function index() {
  return project.find().exec();
}

function search(search) {
  var regex = new RegExp(search, "i");
  return project
    .find({
      $or: [{ description: regex }, { name: regex }]
    })
    .exec();
}

function read(id) {
  return project.findOne({ _id: id }).exec();
}

async function update(id, name, description) {
  return await project
    .findOne({ _id: id })
    .exec()
    .then(proj => {
      proj.name = name;
      proj.description = description;
      return proj.save();
    })
    .catch(err => {
        //console.log("edit error:", err);
      reject(err);
    });
}

async function del(id){
    return await project
        .deleteOne({_id:id})
        .then(result=>{
            if(result.deletedCount > 0){
                return(true);
            }else{
                return Promise.reject(new Error("id not found"))
            }
        });
}

module.exports = {
    index,
    create,
    read,
    update,
    del,
};
