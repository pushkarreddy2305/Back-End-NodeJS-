const router = require("express").Router();
const { Provider } = require("../../models");


//index
router.get('/',(req,res) => {
    // !! this gives us an unhandled promise rejection warning
    try{
    Provider.find({},
            (err,provider)=>{
                if(err) res.send(err);
                res.send(provider)
            }).exec().then((prov) => res.send(prov))
            .catch( err => res.send(err))
    }catch(E){
        console.log(E.message)
    }
});


router.get('/:label',(req,res) => {
    var regex = new RegExp(req.params.label,'i');
    return Provider.find({label:regex}).exec()
        .then(prov => res.send(prov))
        .catch(err=>res.send(err));
})

router.post('/' , (req,res) => {
    let {label,location,credentials,type} = req.body;
    return new Provider({
        label,
        location,
        credentials,
        type
    }).save()
        .then(prov => res.send(prov))
        .catch(err => res.send(err))
})

router.put('/:id' , (req,res) => {
    let _id = req.params.id;
    let {label,location,credentials,type} = req.body;
    // let newLabel = req.body.label;
    console.log(label,location,credentials,type);
    return Provider.updateOne(
        {_id},
        {
            label,
            location,
            credentials,
            type
        }).exec()
        .then(prov => res.send(prov))
        .catch(err => res.send(err))
})

router.delete('/:id',(req,res) => {
    const _id = req.params.id
    var regex = new RegExp(req.params.label,'i');
    return Provider.deleteOne({_id}).exec()
        .then(prov => res.send(prov))
        .catch(err => res.send('error'));
})


module.exports = router;
