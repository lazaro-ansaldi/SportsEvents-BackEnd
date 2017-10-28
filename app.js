var express = require('express');
var app = express();
var dbConection = require('./db/connection');
var bodyParser = require('body-parser');

var teamsRouter = require('./routers/teamRouter');
var appLogger = require('./logger/log');

appLogger.logInfo("***Starting application...");
let port = 2000;
//Connect to db once

appLogger.logInfo("Trying connecto to mongoDb");
dbConection.Connection;
appLogger.logInfo("Connection succes!");

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Home Page");
})

app.use('/teams', teamsRouter);

app.listen(port);
appLogger.logInfo("App running on port:" + port);
