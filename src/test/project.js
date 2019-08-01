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
let {server} = require( '../../server.js');
let should = chai.should();

chai.use(chaiHttp);
