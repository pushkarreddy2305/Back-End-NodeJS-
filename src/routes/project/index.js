const router = require("express").Router();
const controller = require("../../controllers/projects");

router.get("/", (req, res) => {
  controller.index().then(projects => {
    res.send(projects);
  });
});

router.get("/:id", (req, res) => {
  //console.log("id", req.params.id);
  controller.read(req.params.id).then(project => {
    res.send(project);
  });
});

router.get("/:search", (req, res) => {
  controller.search(req.params.search).then(x => {
    res.send(x);
  });
});

router.post("/", (req, res) => {
  //console.log(req.body);
  res.send(controller.create(req.body.name, req.body.description));
});

router.put("/", (req, res) => {
  let { id, name, description } = req.body;
  controller
    .update(id, name, description)
    .then(project => res.json({ success: true, project }))
    .catch(err => {
        res.json({
            success: false,
            error:err
        });
    });
});

router.delete("/", (req,res) => {
    controller.del(req.body.id)
        .then(proj => res.json({deleted:true}))
        .catch(err =>{
            res.json({error:err.message})
        })
});

module.exports = router;
