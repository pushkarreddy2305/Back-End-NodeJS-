var userRouter = require('./user');
var projectRouter = require('./project');
var authRouter = require('./auth');
var statusRouter = require('./project/status.js');
var providerRouter = require('./providers');
var templateRouter = require('./templates')
var systemTypesRouter = require('./systemTypes');
var refreshProjectRouter = require('./project/refresh.js');

module.exports = {
    userRouter,
    projectRouter,
    authRouter,
    statusRouter,
    providerRouter,
    templateRouter,
    systemTypesRouter,
    refreshProjectRouter,
}
