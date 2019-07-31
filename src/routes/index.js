var userRouter = require('./user');
var projectRouter = require('./project');
var authRouter = require('./auth');
var jiraRouter = require('./jira');
var confluenceRouter = require('./confluence');
var commandRouter = require('./command');

module.exports = {
    userRouter,
    projectRouter,
    authRouter,
    jiraRouter,
    confluenceRouter,
    commandRouter,
}
