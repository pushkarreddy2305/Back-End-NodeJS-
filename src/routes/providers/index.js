const router = require("express").Router();
const { Provider ,SystemType} = require("../../models");
const {systemTest} = require("../../systemTest");



//index
router.get('/',(req,res) => {
    // !! this gives us an unhandled promise rejection warning
    try{
        Provider.find({})
            .populate('systemType')
            .exec()
            .then((prov) => res.send(prov))
            .catch( err => res.send(err))
    }catch(E){
        console.log(E.message)
    }
});


router.get('/:id',(req,res) => {
    let id = req.params.id
    return Provider.findById(id)
        .populate('systemType')
        .exec()
        .then(prov => res.send(prov))
        .catch(err=>res.send(err));
})

router.get('/:id/status',(req,res) => {
    let id = req.params.id
    Provider.findById(id)
        .populate('systemType')
        .exec()
        .then(prov => {
            systemTest(prov.systemType.name,prov.credentials)
                .then((result) => res.send({success:result}))
                .catch(err => res.send({success:false,err}))
        })
        .catch(err=>res.send(err));
})

router.post('/' , async (req,res) => {
    let {label,location,credentials,systemType,type} = req.body;
    let systemTypeObj
    await SystemType.findById(systemType)
        .exec()
        .then( type =>{
            systemTypeObj = type
        })
        .catch(err => console.log("Error Provider Post:",err));

    new Provider({
        label,
        location,
        credentials,
        systemType:systemTypeObj._id,
        type
    }).save()
        .then(prov => res.send(prov))
        .catch(err => res.send(err))
})

router.put('/:id' , async (req,res) => {
    let _id = req.params.id;
    let {label,location,credentials,systemType,type} = req.body;
    let original,systemTypeObject;

    await SystemType.findById(_id)
        .exec()
        .then( type => systemTypeObject = type)
        .catch(err => {throw err});

    await Provider.findById(_id)
        .populate('systemtype')
        .exec()
        .then(prov => original = prov)
        .catch(err=>{throw err});

    if(original){
        let newData = {
            label: label || original.label,
            location: location || original.location,
            credentials: credentials || original.credentials,
            type: type || original.type,
            systemType: systemType || original.systemType,
        };

        Provider.updateOne({_id},newData)
            .populate('systemtype')
            .exec()
            .then(prov => {
                Provider.findById(_id)
                    .exec(
                        (err,provider) => {
                            if(err) res.send({success:false,err});
                            res.send(provider);
                        })
            })
            .catch(err => res.send(err))
    }else{
        res.status(404).send({success:false,err:"resource does not exist"});
    }
})

router.delete('/:id',(req,res) => {
    const _id = req.params.id
    return Provider.deleteOne({_id}).exec()
        .then(prov => res.send({success:true}))
        .catch(err => res.send({success:false,err}));

})


module.exports = router;
