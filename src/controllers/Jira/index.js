
const {db} = require("../../db");
const JIRA = require('@atlassian/jira')
console.log("JIRA",)
const JiraClient = require("jira-connector")

/*const jira = new JiraClient({
    host: 'http://localhost:8090/',
    strictSSL: true // One of optional parameters
});
*/
//console.log("jira",)

const clientOptions = {
  baseUrl: 'http://localhost:8090/rest/auth/1/session',
 // host: 'localhost',
 // port: "8090",
 // protocol: 'http',
  strictSSL: false,
  
  headers: {},
  options: {
    timeout: 100
  }
}

const jira1 = new JIRA(clientOptions)
console.log("jira",)

jira1.authenticate({
  type: 'basic',
  username: 'sharath',
  password: 'Wilmington@1995'
})

console.log("AUTHED:",jira1 ,this.auth)

var jira = new JiraClient(
  {
    host: "localhost",
    port : "8090",
    protocol: "http",
    basic_auth:{
    	username: 'sharath',
    	password: 'Wilmington@1995'
    }
    }
   /* oauth: {
      consumer_key: "123456",
      private_key:
        "-----BEGIN RSA PRIVATE KEY-----\n" +
        "MIICXgIBAAKBgQDJIFdLh84myIKl0AAhxI2BSLd57yUvvQpNmpN2o3yY8WHGFsdd\n"+
		"fsRttSn/eiJNjqZlZ7uPuWCgBwBXl30T4s+zAsJqMVExgpZDX4KweTqRHFQtQSxW\n"+
		"yu1xuBU30OeQQB3dGu+PnXZmpKf1YN7YIBW1Hi35fh7qRfOPz1Rze6PYewIDAQAB\n"+
		"AoGBAI0h6J/TuFF2ulboUm9foXxrLnSd35ZULPqv0XKa3j/kghuiuFtfLS9exQ3F\n"+
		"AnUx+ImH9RGxn6AryY2te9OMgPl6G22feOhIR8rqFHlZjXAm4PxLNqtc4SqtxLbh\n"+
		"GbVuCglWYa/VESKZmQXZmLU0p7uqJ9H+YnInHoU/ZkkHwMKhAkEA5795k7Mh4E01\n"+
		"kjoSBbEULIHxjKmyun033FD/Y5A+EI/c2GlgUW5nfDlSu/Lx+UnYcwDehRQLZD+v\n"+
		"XoUoI6Ik3QJBAN4sg2dcmTDbxgalYpZTCVlFFt/7C3Nu3sV7HYTURH4/g7Keu4oa\n"+
		"+EMnfxHbrFynefjjx8WxbCH7mHyAmfp0UTcCQFrsvBWgFa18fYVGtWV4SZMA1LW8\n"+
		"qvwSPwV43grBQCidWSeriHfKml2Z3AUT165YM81DTQrnh2Sou/SYx9vbNR0CQQCY\n"+
		"WjP91DzkiUDhW9YgOW7mvX7zNwbiMHwpNcTHSnxxioJ4IWt/SAFIo7P6fgZTPzFg\n"+
		"IGrkwUbigtJNRi7Q1aS/AkEAvWmmatX4JYg2CP18QffARqgoeQpiQfxaAZ99qLIl\n"+
		"+sSVrc4jKxtcZxZJiimy2bdhPxU5KXCM1YNdSSPU7gXdpA==\n" +
		        "-----END RSA PRIVATE KEY-----"
    }
  },
  function(error, oauth) {
    console.log("oauth",oauth);
    console.log("error",error);
  }*/
)
/*.auth.currentUser()
.then(x=>console.log(x))
.catch(err=>console.log("Error",err));
*/

function createProject(){
/*return jira.project.createProject(
 {
	assigneeType:"UNASSIGNED",
	description:"test description",
	key:"SharathTestKey",
	name:"This is a test project",
})*/
console.log(jira)
jira.project.getAllProjects({username: "sharath"}).then(x=> console.log(x))
.catch(err=>console.log("error: ",err))
return "createProject"
}

function deleteProject(projectIdOrKey){
 jira.delete.deleteProject({
 	key:"",
 	accountId:"",
 	username:""
 })
return {
 	projectIdOrKey,
 }
}

function setProject(projectIdOrKey,propertyKey){

return{
	projectIdOrKey,
	propertyKey,
 }
}
module.exports = {
	createProject,
	deleteProject,
	setProject,
}