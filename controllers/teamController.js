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
    Team.findOne({'_id' : req.params.id}, function(err, team){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else
        {
            if(team) {
                res.send(team);
            }
            else{
                res.sendStatus(404);
            }
        }
    })
});

exports.upsert = (function(req, res){
    Team.findOneAndUpdate(
        {_id:req.body._id},
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

exports.deleteOneById = (function(req, res){
    Team.findByIdAndRemove(req.params.id, function(err, data){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }
            else {res.sendStatus(200);}
    });
});

exports.addTeam = (function(req, res){
    Team.create(req.body, function(err, data){
        if (err) {
            log.logError(err);
            res.sendStatus(501);
        }
        res.sendStatus(201);
    });
});

exports.updateById = (function(req, res){
    Team.update({_id:req.body._id}, req.body, {upsert:true}, function(err, data){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }
        else {res.sendStatus(200);}
    })
});
