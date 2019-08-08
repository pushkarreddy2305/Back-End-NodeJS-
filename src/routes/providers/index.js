const router = require("express").Router();
const { Provider } = require("../../models");


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
    return Provider.find({label:regex}).exec()
        .then(prov => res.send(prov))
        .catch(err=>res.send(err));
})

router.post('/' , (req,res) => {
    console.log(req.body)
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

router.delete('/:label',(req,res) => {
    console.log(req.params.label)
    var regex = new RegExp(req.params.label,'i');
    return Provider.deleteOne({_id:req.params.label}).exec()
        .then(prov => res.send(prov))
        .catch(err => res.send('error'));
})


module.exports = router;
