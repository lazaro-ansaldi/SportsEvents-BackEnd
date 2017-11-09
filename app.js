const express = require('express');
const app = express();
const dbConection = require('./db/connection');
const bodyParser = require('body-parser');
const appLogger = require('./logger/log');

const teamsRouter = require('./routers/teamRouter');
const matchRouter = require("./routers/matchRouter");

appLogger.logInfo("***Starting application...");
const port = 2000;

// Body parser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

appLogger.logInfo("Trying connect to mongoDb");

//Connect to db once
dbConection.Connection;
appLogger.logInfo("Connection succes!");

//Routes cofiguration
app.use('/teams', teamsRouter);
app.use('/matches', matchRouter);

app.listen(port, () => {
    appLogger.logInfo("App running on port: " + port);
});

