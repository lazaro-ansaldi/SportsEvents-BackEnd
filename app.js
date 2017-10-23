var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var teams = require('modules/teams/teamsDB');

mongoose.connect('mongodb://localhost/sports', {
    useMongoClient:true
});

var dbConection = mongoose.connection;

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
