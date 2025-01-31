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

router.get('/templatetype/:id', async(req, res)=>{
    var id = req.params.id;
    await TemplateType.findOne({_id: id})
    .exec()
    .then(result => {
        res.send(result);
    })

})


router.post('/', async (req, res) =>{
    console.log(req.body);
    const { name, location, type } = req.body;
    console.log(type);
    let id; 
    await TemplateType.findOne({typeName: type})
        .exec()
        .then(type=>id = type._id)
        .catch(err => res.send('cannot find file type' + err))
            return new Template({
                templateName: name,
                templateLocation: location,
                templateType: id
            }).save()
            .then(result=> {
                res.send(result)
            })
            .catch(err=> res.send(err))
})

router.put('/:id', async (req, res)=>{
    const _id = req.params.id
    const { name, location, type } = req.body
    let typeId; 
    await TemplateType.findOne({typeName: type})
        .exec()
        .then(type=> typeId = type._id)
        .catch(err => res.send('cannot find file type'))
    let original;
    await Template.findById(_id)
        .exec()
        .then(template=> original = template)
        .catch(err => res.send('cannot find template'))
    let newData = {
        templateName: name || original.templateName,
        templateLocation: location || original.templateLocation,
        templateType: typeId || original.templateType
    };
    console.log(newData, original)
   return Template.updateOne({_id}, newData, (err, doc)=>{
       if (err){
           res.send(err)
       } else {
           res.send(doc)
       }
   })
})

router.delete('/:id', (req, res)=> {
    const _id = req.params.id;
    return Template.deleteOne({_id}).exec()
    .then(temp=> res.send(temp))
    .catch(err=>res.send(err))
})

module.exports = router;