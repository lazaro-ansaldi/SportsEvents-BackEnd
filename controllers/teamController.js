const Team = require('../models/teamModel');
const log = require('../logger/log');

exports.teams_list = function(req, res){
    Team.find(function(err, teams) {
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        res.send(teams);
        }
      });
};

exports.getOneById = (function(req, res){
    Team.findOne({id:req.params.id}, function(err, team){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else
        {
            if(team) {
                res.send(team);
            }
            else{
                console.log(req.params.id)
                res.sendStatus(404);
            }
        }
    })
});

exports.upsertById = (function(req, res){
    Team.findByIdAndUpdate(
        req.body.id,
        req.body,
        {upsert : true},
        function(err, data){
            if(err) { 
                log.logError(err);
                res.sendStatus(501);
            }
            else {
                log.logInfo("Team: " + req.body._id + " correctly updated!");
                res.sendStatus(200);
            }
        }
    );
});

exports.deleteById = (function(req, res){
    Team.findByIdAndRemove(req.params.id, function(err, data){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }
            else {res.sendStatus(200);}
    });
});

