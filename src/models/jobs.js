/*
 * jobs.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */
import mongoose from "mongoose";

var jobSchema = new mongoose.Schema({
    jobId:{
        type:Number,
        required:true,
    },
    projectId:{
        type:String,
        required:true
    },
    success:{
        type:Boolean,
        required:true,
    },
    result:{
        type:String,
    },
});

var job = mongoose.model('job',jobSchema);

export default job;

