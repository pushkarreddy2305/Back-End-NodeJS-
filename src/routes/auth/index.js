const router = require('express').Router();
const controller = require('../../controllers/auth');

router.post('/',
    (req,res) => {
        controller.authenticate(
            req.body.username,
            req.body.password
        )
);
