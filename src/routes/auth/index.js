const router = require('express').Router();
const controller = require('../../controllers/auth');

router.post('/',
    (req,res) => {
        controller.authenticate(
            req.body.username,
            req.body.password
        ).then(user =>{
            if(user[0].username != undefined ){
                req.session.loggedIn = true;
                res.json(true)
            }else{
                res.json(false);
            }
        }).catch((err) => {
            res.send("something went wrong");
        })
    }
);

module.exports = router;
