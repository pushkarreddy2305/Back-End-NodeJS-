/*
 * index.js
 * Copyright (C) 2019 brice <brice@US5CD9011ZWN>
 *
 * Distributed under terms of the MIT license.
 */
const router = require("express").Router();
const { SystemType} = require("../../models");

router.get('/',(req,res) => {

    SystemType.find({})
        .exec()
        .then(types => res.send(types))
        .catch(err => res.status(404).send("Resource does not exist"))


});

module.exports = router;
