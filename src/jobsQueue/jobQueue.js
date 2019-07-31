/*
 * jobQueue.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 *
 *
 *
 *
 * import this file on a page and add jobs to job queue
 * with the add function:
 *      jobQueue.add(job)
 * jobs must be json serializable so jobs should be in the format
 *      {
 *          name:"CommandClassConstructorName", // this is the string name of the command class
 *          args:['arg1','arg2'],               // this is an array of constructor arguments in order.
 *      }
 */

import Queue from 'bull';
import StatusQueue from './StatusQueue.js';
import {Constructors}  from '../commandBus';

var jobQueue = new Queue('jobs');

jobQueue.process((job,done)=>{
    // since jobs data has to be serializable I can't send real class instances
    // so I have to pass the class name and the arguments, then instantiate the
    // class here. The Construtors object holds references to all command classes
    // then you spread the args and call it as a constructor. Then you will have
    // an executable command;
    let command = new Constructors[job.data.name](...job.data.args)
    try{
        command.execute();
        StatusQueue.add({
            success:true,
            id:job.id,
        });
        done();
    }catch(e){
        StatusQueue.add({
            success:false,
            id:job.id,
            error:e.message,
        });
        done(e.message);
    }
});

export {jobQueue};
