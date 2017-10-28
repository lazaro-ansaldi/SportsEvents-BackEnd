const express = require('express');
const app = express();
const dbConection = require('./db/connection');
const bodyParser = require('body-parser');

const teamsRouter = require('./routers/teamRouter');
const appLogger = require('./logger/log');

appLogger.logInfo("***Starting application...");
const port = 2000;
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
