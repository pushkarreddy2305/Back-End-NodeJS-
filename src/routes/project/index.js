const router = require("express").Router();
const controller = require("../../controllers/projects");

router.get("/", (req, res) => {
  controller.findAll().then(projects => {
    res.send(projects);
  });
});

router.get("/:id", (req, res) => {
  //console.log("id", req.params.id);
  controller.findById(req.params.id).then(project => {
    res.send(project);
  });
});

router.get("/:search", (req, res) => {
  controller.find(req.params.search).then(x => {
    res.send(x);
  });
});

router.post("/", (req, res) => {
  res.send(controller.create(req.body.name, req.body.description));
});

router.put("/", (req, res) => {
  let { id, name, description } = req.body;
  controller
    .edit(id, name, description)
    .then(project => res.json({ success: true, project }))
    .catch(err => {
      //console.log("Edit Error:", err);
      res.json({ success: false });
    });
});

router.delete("/:id", (req, res) => {
  controller.remove(req.params.id)
  .then(result=> res.send(result))
  .catch(err => {
    res.json({ success: false });
  })
})

module.exports = router;
