var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.get("/", function(req, res){
    res.send("Home Page");
})

app.listen(2000);
console.log('Running on port 2000...');
