const router = require('express').Router();
const controller = require('../../controllers/auth');

/* remove this for production */
router.post('/',
    (req,res) => {
        //        console.log(
        //            req.query.username,req.params.username,req.body.username,
        //            req.query.password,req.params.password,req.body.password
        //        );
        controller.authenticate(
            req.query.username,
            req.query.password
        ).then(user =>{
            if(user.username != undefined ){
                req.session.loggedIn = true;
                req.session.user = user;
                res.json({success:true})
            }else{
                res.json({success:false});
            }
        }).catch((err) => {
            res.json({success:false});
        })
    }
);
router.post('/',
    (req,res) => {
        controller.authenticate(
            req.body.username,
            req.body.password
        ).then(user =>{
            if(user.username != undefined ){
                req.session.loggedIn = true;
                req.session.user = user;
                res.json({success:true})
            }else{
                res.json({success:false});
            }
        }).catch((err) => {
            res.json({success:false});
        })
    }
);

router.get('/',
    (req,res) => {
        res.json(controller.currentUser(req.session))
    }
)

module.exports = router;
