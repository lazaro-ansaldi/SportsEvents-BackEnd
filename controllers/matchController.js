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

exports.updateById = (function(req, res){
    Match.update({_id:req.body._id}, req.body, {upsert:true}, function(err, data){
        if(err){
            log.logError(err);
            res.sendStatus(501);
        }else{
            res.sendStatus(200);
        }
    })
});


