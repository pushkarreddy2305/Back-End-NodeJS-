/*
 * refresh.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */

const router = require("express").Router();
const { Project } = require("../../models");
const controller = require('../../controllers/projects')

// this does route model binding for any route
// with the id param
router.param('id',(req,res,next)=>{
  Project.findById(req.params.id)
    .exec()
    .then( proj => {
      req.project = proj
      next();
    })
    .catch( err => res.status(404).send(err))
})

// this will guard all routes in the refresh router
// it will stop any route from continuing if
// refreshProtect is true
router.all('/:id',(req,res,next) => {
  if(!req.project.refreshProtect){
    next()
  }
  res.status(400).send({err:"Project is refresh protected"})
})

//this route will acutally refresh the post.
//TODO: MAKE THIS ACTUALLY REFRESH JUST
//STUBBED OUT RIGHT NOW.
router.post('/:id',(req,res) => {
  res.send({success:true});
})

module.exports = router;
