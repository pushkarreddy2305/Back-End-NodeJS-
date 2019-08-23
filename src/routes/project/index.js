const router = require("express").Router();
const { Project } = require("../../models");
const {jobQueue} = require('../../jobsQueue');
const controller = require('../../controllers/projects')
const deleteComponent = require('../../controllers/components')



//Param model binding for id
router.param("id",(req,res,next,id)=>{

  Project.findById(id)
    .populate('components')
    .populate('templates')
    .exec()
    .then(project => {
      req.project = project;
      next();
    })
    .catch(err => {
      res.status(404).send({err});
    })

})



router.get("/", (req, res) => {
  controller.index().then(Projects => {
    res.send(Projects);
  });
});

router.get("/:id", (req, res) => {
  res.send(req.project);
});

//router.get("/:search", (req, res) => {
//  controller.search(req.params.search).then(x => {
//    res.send(x);
//  });
//});

router.post("/", (req, res) => {

  let {key,name,description,refreshProtect,title,pageContent} = req.body;

  var proj = new Project({
    key,
    projectName:name,
    description,
    refreshProtect,
  });

  console.log(proj);
  proj.save(
    (err,project) => {
      if(err) 
      { 
        console.log(err); 
        res.status(500).send(err);
      }else{
      res.send(project)
      }
    });
});

router.put("/:id", (req, res) => {
  let { name, description, refreshProtect} = req.body;
  let project = req.project
  project.name = name || project.name;
  project.description = description || project.description;
  project.refreshProtect = refreshProtect ;

  project.save()
    .then(Project => res.json({ success: true, Project }))
    .catch(err => {
      res.json({
        success: false,
        error:err
      });
    });
});

router.delete("/:id", (req, res) => {

  for(component of req.project.components){
    deleteComponent(component);
  }

  req.project.delete();

  res.status(202).send({success:true,project:req.project});
})

module.exports = router;
