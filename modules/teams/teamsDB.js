var mongoose = require('mongoose');

//Define the collection schema
var teamSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    createDate:{
        type: Date,
        default: Date.now
    },
    shortName:{
        type: String,
        required: false
    }
})

//Export the teams module
var teams = module.exports = mongoose.model('teams', teamSchema);

//Get all the team from mongo

module.exports.getTeams = function(callback, limit){
    teams.find(callback).limit(limit);
}