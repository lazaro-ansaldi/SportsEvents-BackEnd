var mongoose = require('mongoose');

const dbName = "sportsdb";
const host = "mongodb://localhost";

//Exports the db connection
module.exports = Connection = mongoose.connect(host + '/' + dbName, {
    useMongoClient:true
});