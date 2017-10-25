var Teams = require('../models/teamModel') 

exports.teams_list=function(req, res){
    
    Teams.find(function(err, teams) {
        if(err) console.log(err);
        res.send(teams);
      });
}
