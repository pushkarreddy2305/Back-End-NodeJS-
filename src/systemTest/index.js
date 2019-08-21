/*
 * index.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */
const Bitbucket = require('bitbucket');

var bitbucket = async (opts) => {

    let bb = new Bitbucket({
        hideNotice:true,
    });

    let config = Object.assign(opts,{type:'basic'} );
    bb.authenticate(
        config
    );

    try{
        let repos = await bb.repositories.list({
            username:opts.username
        })
        return  true;
    }catch(e){
        return false;
    }

}






/*
 * To Use the system test function for a new systemtype
 * you must add function that takes an object as the only
 * parameter and returns true upon success and false otherwise.
 * Add the function to the tests object below.
 */
const tests = {
    bitbucket
}

let systemTest = (systemType,options) => {
    if( tests.hasOwnProperty(systemType)){
        return tests[systemType](options);
    }
}



module.exports ={
    systemTest,
}

