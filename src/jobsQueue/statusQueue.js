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
        success:job.data.success,
        result:job.data.result,
    }).save((err)=>{
        if(err){console.log(err)}
    });

    done();
})


export {statusQueue} ;
