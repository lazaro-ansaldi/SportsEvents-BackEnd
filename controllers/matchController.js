const Team = require('../models/teamModel');
const Match = require('../models/matchModel');
const log = require('../logger/log');

exports.addMatch = (function(req, res){
    Match.create(req.body, function(err, result){
        if (err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
            res.sendStatus(201);
        }
    })
});

exports.upsertById = (function(req, res){
    Match.findOneAndUpdate(
        {_id:req.body._id}, req.body, {upsert:true},
        function(err, data){
        if(err){
            log.logError(err);
            res.sendStatus(501);
        }else{
            res.sendStatus(200);
        }
    })
});

exports.getById = (function(req, res){
    Match.findOne({'_id' : req.params.id}, function(err, match){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else
        {
            if(match) {
                res.send(match);
            }
            else{
                res.sendStatus(404);
            }
        }
    })
});

exports.deleteById = (function(req, res){
    Match.findByIdAndRemove(req.params.id, function(err, data){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }
            else {res.sendStatus(200);}
    });
});

exports.getByStatus = (function(req, res){
    Match.findOne({status : req.params.status}, function(err, matches){
        if(err){
            log.logError(err);
            res.sendStatus(501);
        }
        res.send(matches);
    })
});

exports.matches_list = (function(req, res){

    Match.find(function(err, matches) {
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        res.send(matches);
        }
      });
});


