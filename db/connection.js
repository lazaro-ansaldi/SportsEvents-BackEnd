var mongoose = require('mongoose');

module.exports = Connection = mongoose.connect('mongodb://localhost/sports', {
    useMongoClient:true
});