"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');

const {
    userRouter,
    projectRouter,
    authRouter,
} = require('./src/routes');

const {connect} = require('./src/db');

connect();

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret:"3mpl0y3r",
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', async (req, res) => res.sendStatus(200));
app.use( (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})
app.all(/[^\/auth]/, async function (req, res, next) {

    if(req.session.loggedIn){

    }
    next();
});

app.use('/user', userRouter);
app.use('/project', projectRouter);
app.use('/auth',authRouter);

const server = app.listen(port, function () {
    console.log("API running on port ", server.address().port);
});
