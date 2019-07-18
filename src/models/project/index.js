const mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    jiraId:{
        type:String,
        required:true,
    },
    confluenceId:{
        type:String,
        required:true,
    },
    bitbucketId:{
        type:String,
        required:true,
    }
})

projectModel = mongoose.model('project',projectSchema);

module.exports = projectModel

