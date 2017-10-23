var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sports', {
    useMongoClient:true
});

var dbConection = mongoose.connection;

app.get("/", function(req, res){
    res.send("Home Page");
})

app.listen(2000);
console.log('Running on port 2000...');
