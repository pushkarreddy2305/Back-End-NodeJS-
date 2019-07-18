import agent from 'superagent'

class JiraConnectorService {
	constructor(){
		
this.jiraApiURl="http://localhost:8090/rest/api/2"
}


createProject=(project)=>agent.post(`${this.jiraApiURl}/project`).send(project).set('Authorization',this.getBasicCredentials())

deleteProject=(key)=>agent.delete(`${this.jiraApiURl}/project/${key}`).set('Authorization',this.getBasicCredentials())

updateProject=(key,project)=>agent.put(`${this.jiraApiURl}/project/${key}`).send(project).set('Authorization',this.getBasicCredentials())

getProjectByKey=(key)=> agent.get(`${this.jiraApiURl}/project/${key}`).set('Authorization',this.getBasicCredentials())

getAllProjects=()=>   agent.get(`${this.jiraApiURl}/project`).set('Authorization',this.getBasicCredentials())

  
getBasicCredentials=()=>{
	const enCodedToken = Buffer.from("Sharath:Wilmington@1995").toString('base64')
	return `Basic ${enCodedToken}`																
}


}

export default JiraConnectorService