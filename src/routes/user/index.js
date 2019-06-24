const router = require('express').Router();
const userController = require('../../controllers/userController');


router.post('/postUser', async (req, res) => {
    try {
        const response = userController.postUser(req.body, req.app.connectionSettings, req.app.username);
        res.json(response);
    } catch (e) {
        logger.error(e);
    }
});

router.get('/',
    (req,res) => {
        userController.findAll()
            .then(users => {
                res.send(users)
            })
    }
);

router.get('/:name',
    function(req,res){
        userController.find(req.params.name)
            .then(x =>{
                res.send(x)
            });
    }
);


module.exports = router;
