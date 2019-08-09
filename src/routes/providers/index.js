const router = require("express").Router();
const { Provider,User } = require("../../models");


//index
router.get('/',(req,res) => {

    try{
    Provider.find({},
            (err,provider)=>{
                console.log("whaddup");
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
    return Provider.findOne({label:regex}).exec()
        .then(prov => res.send(prov))
        .catch(err=>res.send(err));
})

router.post('/' , (req,res) => {
    let {label,location,credentials,type} = req.body;
    console.log(label,location,credentials,type);
    return new Provider({
        label,
        location,
        credentials,
        type
    }).save()
        .then(prov => res.send(prov))
        .catch(err => res.send(err))
})

router.put('/:label' , (req,res) => {
    let label = req.params.label;
    let {location,credentials,type} = req.body;
    let newLabel = req.body.label;
    console.log(label,location,credentials,type);
    return Provider.updateOne(
        {label},
        {
            label:newLabel,
            location,
            credentials,
            type
        }).exec()
        .then(prov => {
            Provider.findOne({label:newLabel})
                .exec()
                .then(prov => res.send(prov))
                .catch(err => res.send(err));
        })
        .catch(err => res.send(err))
})

router.delete('/:label',(req,res) => {
    var regex = new RegExp(req.params.label,'i');
    return Provider.deleteOne({label:regex}).exec()
        .then(prov => res.send({success:true}))
        .catch(err => res.send({success:false,err}));
})


module.exports = router;
