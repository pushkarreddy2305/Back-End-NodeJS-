/*
 * statusQueue.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

import Queue from 'bull';

var statusQueue = new Queue('status');
statusQueue.process((job,done)=>{

    done();
})


export {statusQueue} ;
