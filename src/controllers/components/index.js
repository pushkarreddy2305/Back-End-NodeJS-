/*
 * index.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

let {Provider} = require('../../models/');
const Bitbucket = require('bitbucket');
const JiraConnectorService = require('../../services/jira');
const DeleteController = require("../../services/confluence/deleteSpaceAndPage.js");



var bitbucket = async (component) => {

  let opts = component.provider.credentials;

  let bb = new Bitbucket({
    hideNotice:true,
  });

  let config = Object.assign(opts,{type:'basic'} );
  bb.authenticate(
    config
  );

  try{
    let repos = await bb.repositories.delete({
      'username':opts.username,
      'repo_slug':component.componentName
    })
    return true;
  }catch(e){
    console.log("Error line 40:",e.message,e.error.detail)
    return false;
  }

}

var jira = (component) => {
  new JiraConnectorService(
    component.provider.credentialss.username,
    component.provider.credentials.password
  ).deleteProject(component.componentName)
    .then((resp)=> console.log(resp))
    .catch(err=> console.log(err))
}

var confluence = (component) => {

  try{
    DeleteController.deleteSpace(
      component.ComponentName,
      component.provider.credentials.username,
      component.provider.credentials.password
    )
    return true;
  }catch(e){
    return false;
  }

}

const cleaners = {
  bitbucket,
  jira,
  confluence,
}


function deleteComponent(component){

  component.provider.populate('systemType')
    .execPopulate()
    .then(provider =>{
      if(cleaners.hasOwnProperty(provider.systemType.name)){
        return cleaners[provider.systemType.name](component);
      }
    })
    .catch(err => {err} );

}

module.exports = deleteComponent;

