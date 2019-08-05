/*
 * project.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

process.env.NODE_ENV = 'test';

const  mongoose = require( 'mongoose');
let  project = require( '../models/project');

const chai = require( 'chai');
const chaiHttp = require( 'chai-http');
import app from '../../server.js';
let should = chai.should;
let expect = chai.expect;

chai.use(chaiHttp);

describe("First Test", () => {
    it("should pass whooo!", (done) => {
        expect(2).to.equal(2)
        done();
    })
    chai.request(app)
        .get('/project')
        .end((err,res) =>{
            console.log(err,res)
        });
});

describe("First Test", () => {
    it("should pass whooo!", (done) => {
        expect(2).to.equal(2)
        done();
    })
    chai.request(app)
        .get('/project')
        .end((err,res) =>{
            console.log(err,res)
        });
});

