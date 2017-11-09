const Event = require('../models/eventModel');
const log = require('../logger/log');
const mongoose = require('mongoose');

exports.eventsByTeamId = (function(req, res){
    Event.find({match:req.params.matchId},
        function(err, teams) {
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        res.send(teams);
        }
      });
});

exports.addEvent = (function(req, res){
    Event.create(req.body, function(error, result){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        res.send(teams);
        }
    });
});