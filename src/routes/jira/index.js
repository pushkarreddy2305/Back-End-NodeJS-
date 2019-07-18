const router = require('express').Router();
<<<<<<< HEAD
const JiraConnectorService = require('../../services/jira');


router.get('/projects', (req, res, next) =>
    new JiraConnectorService().getAllProjects().then((resp)=>{
        return res.json(resp.body)
    }).catch(err=> res.status(err.status).json(err))

);

router.post('/projects', (req, res, next) =>
    new JiraConnectorService().createProject(req.body).then((resp)=>{
        return res.json(resp.body)
    }).catch(err=> res.status(err.status).json(err))
);

router.put('/projects/:key', (req, res, next) =>
    new JiraConnectorService().updateProject(req.params.key,req.body).then((resp)=>{
        return res.json(resp.body)
    }).catch(err=> res.status(err.status).json(err))
);

router.delete('/projects/:key', (req, res, next) =>
    new JiraConnectorService().deleteProject(req.params.key).then((resp)=>{
        return res.json()
    }).catch(err=> res.status(err.status).json(err))
);

router.get('/projects/:key', (req, res, next) =>
    new JiraConnectorService().getProjectByKey(req.params.key).then((resp)=>{
        return res.json(resp.body)
    }).catch(err=> res.status(err.status).json(err))
);

module.exports = router;
=======
const jiraController = require('../../controllers/Jira');


router.post("/Project",(req,res) => {
	res.send(
		jiraController.createProject()
		/*.then(x => x)
		.catch( err => err)*/
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

>>>>>>> fd84c65e5b2efc4da6b9f2927379b4b366cd16a6
