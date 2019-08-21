/*
 * cleaner.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

let deleteComponent = require('../controllers/components');
let {Component,Provider,SystemType} = require('../models');
const Bitbucket = require('bitbucket');

const chai = require( 'chai');
let should = chai.should;
let expect = chai.expect;

describe("use cleaner to delete bitbucket",
  () => {

    let testComponent;
    before((done) => {

      SystemType.findOne({name:'bitbucket'})
        .exec()
        .then(systype => {
          new Provider({
            label:"testProvider",
            location:"blah.com",
            credentials:{
              username:'bbathel12',
              password:'jsHxb7YcbVF39hNdkyTK',
            },
            systemType:systype
          })
            .save((err,prov) =>{

              new Component({
                componentName:"test",
                jobs:[],
                templates:[],
                provider:prov._id,
              })
                .save((err,component)=>{
                  if(err) console.log("Error line 45:",err)
                  component
                    .populate('provider')
                    .execPopulate()
                    .then(component => {
                      testComponent = component;
                      done()
                    })
                })

            })
        })
        .catch(err => console.log("ERROR line 51:",err));

    })

    before( done => {
      let opts = testComponent.provider.credentials;

      let bb = new Bitbucket({
        hideNotice:true,
      });

      let config = Object.assign(opts,{type:'basic'} );
      bb.authenticate(
        config
      );

      bb.repositories.create({
        'username':opts.username,
        'repo_slug':testComponent.componentName
      })
        .then( res => done())
        .catch(err => {err})
    })

    it("delete bitbucket test repo",
      (done) => {

        deleteComponent(testComponent);

        done();

      }
    )

    after((done) => {

      Component.deleteMany({name:'test'}).exec();
      Provider.deleteMany({name:'testProvider'}).exec();
      done();

    })

  }
)




