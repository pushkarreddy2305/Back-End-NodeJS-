const router = require('express').Router();
const jiraController = require('../../controllers/Jira');


router.post("/Project",(req,res) => {
	res.send(
		jiraController.createProject()
		.then(x => x)
		.catch( err => err)
		)
	console.log("createProject")
})


router.delete("/Project",(req,res)=>{
	res.json(jiraController.deleteProject(req.body.projectIdOrKey))
})

router.put("/Project",(req,res)=>{
	res.json(jiraController.setProject(req.body.projectIdOrKey,req.body.propertyKey))
})


module.exports = router;

