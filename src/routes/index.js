var userRouter = require('./user');
var projectRouter = require('./project');
var authRouter = require('./auth');
var jiraRouter = require('./jira');
var confluence = require('./confluence');

module.exports = {
    userRouter,
    projectRouter,
    authRouter,
    jiraRouter,
    confluence,
}
