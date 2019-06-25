const router = require('express').Router();
const controller = require('../../controllers/projects');

router.get('/',
    (req,res) => {
        controller.findAll()
            .then(projects => {
                res.send(projects)
            })
    }
)

router.get('/:search',
    (req,res) => {
        controller.find(req.params.search)
            .then(x => {
                res.send(x)
            })
    }
)

router.post('/',
    (req,res) => {
        console.log(req.body)
        res.send(
            controller.create(req.body.name,req.body.description)
        );
    }
)

module.exports = router;
