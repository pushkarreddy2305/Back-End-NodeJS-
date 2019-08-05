/*
 * statusQueue.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

import Queue from 'bull';
import jobDb from '../models/jobs.js'

var statusQueue = new Queue('status');

statusQueue.process((job,done)=>{

    result = new jobDb({
        jobId:job.data.jobId,
        projectId:job.data.projectId,
        success:job.data.success,
        result:job.data.result,
    }).save((err)=>{
        if(err){console.log("Status Queue:",err.message)}
    });

    done();

    statusQueue.on("failed",
        (job,err) =>{
            console.log("status queue failed",job.id,err.message);
        }
    );
    statusQueue.on("completed",
        (job,res) =>{
            console.log("status queue completed",job.id,res);
        }
    );
    statusQueue.on("error",
        (err) =>{
            console.log("status queue error",err);
        }
    );
    //    statusQueue.on("stalled",
    //        (job) =>{
    //            console.log("status queue stalled",job.id);
    //        }
    //    );
})


export {statusQueue} ;
