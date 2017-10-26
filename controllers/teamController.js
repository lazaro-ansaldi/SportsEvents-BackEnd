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

exports.upsert = (function(req, res){
    teams.findOneAndUpdate(
        {'_id:' : req.params.id},
        {name: req.body.name, 
            shortName: req.body.shortName, 
            createDate: req.body.createDate},
        {upsert : true, new : true},
        function(err, data){
            if(err) console.log(err);
        }
    )
});

exports.deleteById = (function(req, res){
    teams.findByIdAndRemove(req.params.id);
})
