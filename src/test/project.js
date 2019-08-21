/*
 * project.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

process.env.NODE_ENV = 'test';

const  mongoose = require( 'mongoose');
import {Project} from "../models/";

const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
import app from '../../server.js';
let should = chai.should;
let expect = chai.expect;

chai.use(chaiHttp);

describe("Test Create a project",
  () => {

    before((done) =>{
      Project.deleteMany({
        projectName:"Carpal tunnel claim",
      }, (err,res) => {
        if(err) throw err;
        done()
      })
    });

    it("Should Create a project named 'Carpal tunnel claim',and refreshProtect defaulted to true",
      (done) => {

        chai.request(app)
          .post('/project')
          .send({
            name:"Carpal tunnel claim",
            key:"CTC1234",
            description:"This is a claim about carpal tunnel",
          })
          .end((err,res) =>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('projectName',"Carpal tunnel claim")
            expect(res.body).to.have.property('refreshProtect',true);
            expect(res.body).to.have.property('key',"CTC1234");
            expect(res.body).to.have.property('description',"This is a claim about carpal tunnel");
            done();
          })
      }
    );

    after((done) =>{
      Project.deleteMany({
        projectName:"Carpal tunnel claim",
      }, (err,res) => {
        if(err) throw err;
        done()
      })
    });

  }
)

