var userRouter = require('./user');
var projectRouter = require('./project');
var authRouter = require('./auth');
var jiraRouter = require('./jira');
var confluenceRouter = require('./confluence');

module.exports = {
    userRouter,
    projectRouter,
    authRouter,
    jiraRouter,
    confluenceRouter,
}
