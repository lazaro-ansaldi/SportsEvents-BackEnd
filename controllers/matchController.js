const Team = require('../models/teamModel');
const Match = require('../models/matchModel');
const log = require('../logger/log');
const mongoose = require('mongoose');

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
    console.log(req.body._id);
    if(!req.body._id) req.body._id = new mongoose.mongo.ObjectID();

    Match.findByIdAndUpdate(
        req.body._id, 
        req.body, 
        {upsert:true},
        function(err, data){
        if(err){
            log.logError(err);
            res.sendStatus(501);
        }else{
            res.sendStatus(200);
        }
    })
});

exports.getOneById = (function(req, res){
    Match.findById(req.params.id, function(err, match){
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

exports.matches_list = (function(req, res){
    let query = getQuery(req);

    query.exec(function(err, matches) {
        if(err) {
            log.logError(err);
            res.sendStatus(501);
        }else{
        res.send(matches);
        }
      });
});

function getQuery(req){
    
    const inProgress = (req.query.inProgress === 'true');
    const populateTeams = (req.query.populate === 'true');
    
    let matchFilter = {};
    if(inProgress) matchFilter={status: 'In Progress'};

    let query = Match.find(matchFilter);

    if(populateTeams) query.populate('teams');

    return query;
}


