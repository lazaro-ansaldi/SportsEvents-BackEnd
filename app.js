var express = require('express');
var app = express();
var dbConection = require('./db/connection');
var bodyParser = require('body-parser');

var teamsRouter = require('./routers/teamRouter');

//Connect to db once
dbConection.Connection;

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Home Page");
})

app.use('/teams', teamsRouter);

app.listen(2000);
console.log('Running on port 2000...');
