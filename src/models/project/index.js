const mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
    id: Number,
    key:{
        type:String,
        required:true
    },
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
        default:"",
    },
    confluenceId:{
        type:String,
        default:"",
    },
    bitbucketId:{
        type:String,
        default:"",
    },
    jenkinsId:{
        type:String,
        default:"",
    }
})

var project = mongoose.model('project',projectSchema);

module.exports = project

