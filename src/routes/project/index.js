const router = require("express").Router();
const {jobQueue} = require('../../jobsQueue');

//router.get("/", (req, res) => {
//  controller.index().then(projects => {
//    res.send(projects);
//  });
//});
//
//router.get("/:id", (req, res) => {
//  //console.log("id", req.params.id);
//  controller.read(req.params.id).then(project => {
//    res.send(project);
//  });
//});
//
//router.get("/:search", (req, res) => {
//  controller.search(req.params.search).then(x => {
//    res.send(x);
//  });
//});

router.post("/", (req, res) => {
    let {key,name,description,title,pageContent} = req.body;
    let job = {
        name:"CreateConfluence",
        args:[
            key,
            name,
            description,
            title,
            pageContent,
        ]};
    jobQueue.add(job);
});

//router.put("/", (req, res) => {
//  let { id, name, description } = req.body;
//  controller
//    .update(id, name, description)
//    .then(project => res.json({ success: true, project }))
//    .catch(err => {
//        res.json({
//            success: false,
//            error:err
//        });
//    });
//});
//
//router.delete("/", (req,res) => {
//    controller.del(req.body.id)
//        .then(proj => res.json({deleted:true}))
//        .catch(err =>{
//            res.json({error:err.message})
//        })
//});

module.exports = router;
