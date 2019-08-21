/*
 * authenticators.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

let {systemTest} = require('../systemTest');

const chai = require( 'chai');
let should = chai.should;
let expect = chai.expect;

describe("test bitbucket authenticator",
  () => {

    it("should return true",
      (done) => {

        systemTest('bitbucket',{
          username:'bbathel12',
          password:'jsHxb7YcbVF39hNdkyTK'
        })
          .then((success) => {
            expect(success).to.be.true
            done();
          })
          .catch(err => {
            expect(err).to.be.null
            done()
          })

      }
    )

    it("should fail",
      (done) => {

        systemTest('bitbucket',{username:'bbathel12',password:'wrong'})
          .then((success) => {
            expect(success).to.be.false
            done();
          })
          .catch(err => {
            expect(err).to.be.null
            done()
          })

      }
    )
  }
)



