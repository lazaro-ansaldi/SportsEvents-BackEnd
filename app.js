var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dbConection = require('./db/connection');
var teams = require('./modules/teams/teamsDB.js');
//Connect to db once
dbConection.Connection;

app.get("/", function(req, res){
    res.send("Home Page");
})

app.get("/api/teams", function(req, res){
    teams.getTeams(function(err, teams){
        if(err){
            throw err;
        }
        res.json(teams);
    })
})

app.listen(2000);
console.log('Running on port 2000...');
