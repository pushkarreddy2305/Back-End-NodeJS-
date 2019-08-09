const router = require("express").Router();
const { Template } = require("../../models");


router.get('/', (req, res) =>{
    console.log(req)
    Template.find({}, (err, templates) => {
        if (err){
            console.log(err)
            res.send(err)
        } else {
            console.log(templates)
            res.send(templates)
        }
    })
})

router.post('/', (req, res) =>{
    console.log(req.body)
    const { name, location, type } = req.body;
    return new Template({
        templateName: name,
        templateLocation: location,
        templateType: type
    }).save()
    .then(result=> {
        console.log(result)
        res.send(result)
    })
    .catch(err=> res.send(err))
})
module.exports = router;