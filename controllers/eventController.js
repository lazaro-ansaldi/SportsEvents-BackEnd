const Event = require('../models/eventModel');
const log = require('../logger/log');
const mongoose = require('mongoose');

exports.eventsByTeamId = (function(req, res){
    Event.find({match:req.params.matchId},
        function(err, event) {
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        if(!event) {res.sendStatus(404);}
        res.send(event);
        }
      });
});

exports.addEvent = (function(req, res){
    Event.create(req.body, function(err, result){
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        res.sendStatus(201);
        }
    });
});