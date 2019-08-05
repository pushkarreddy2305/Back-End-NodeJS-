var userRouter = require('./user');
var projectRouter = require('./project');
var authRouter = require('./auth');
var statusRouter = require('./project/status.js');

module.exports = {
    userRouter,
    projectRouter,
    authRouter,
    statusRouter,
}
