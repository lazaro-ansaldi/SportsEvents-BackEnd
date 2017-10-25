var Teams = require('../models/teamModel') 

exports.teams_list = function(req, res){
    
    Teams.find(function(err, teams) {
        if(err) console.log(err);
        res.send(teams);
      });
};

exports.getOneById = (function(req, res){
    Teams.findOne({'_id' : req.params.id}, function(err, team){
        if(err) console.log(err);
        res.send(team);
    })
});
