const router = require("express").Router();
const { Template, TemplateType } = require("../../models");


router.get('/', (req, res) =>{
    console.log(req)
    Template.find({}, (err, templates) => {
        if (err){
            res.send(err)
        } else {
            res.send(templates)
        }
    })
})

router.post('/', async (req, res) =>{
    const { name, location, type } = req.body;
    let id; 
    await TemplateType.findOne({typeName: 'file'})
        .exec()
        .then(type=> id = type._id)
        .catch(err => res.send(err))
    // TemplateType.findOne({typeName:type}, (err, type) =>{
    //     if (err){
    //        res.send('cannot find file type')
    //     } else {
            return new Template({
                templateName: name,
                templateLocation: location,
                templateType: id
            }).save()
            .then(result=> {
                res.send(result)
            })
            .catch(err=> res.send(err))
        // }
    // })
})

router.put('/:id', (req, res)=>{
    const id = req.params.id
    const { name, location, type } = req.body
    let original;
    Template.findbyId(id)
        .exec()
        .then(template=> original = template)
        .catch(res.send('cannot find template'))
    let newData = {
        name: name || original.name,
        location: location || original.location,
        type: type || original.type
    }
})
module.exports = router;