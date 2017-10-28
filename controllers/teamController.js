var Teams = require('../models/teamModel');
var log = require('../logger/log');

exports.teams_list = function(req, res){
    
    Teams.find(function(err, teams) {
        if(err) log.logError(err);
        res.send(teams);
      });
};

exports.getOneById = (function(req, res){
    Teams.findOne({'_id' : req.params.id}, function(err, team){
        if(err) log.logError(err);
        res.send(team);
    })
});

exports.upsert = (function(req, res){
    debugger;
    Teams.findOneAndUpdate(
        {name: req.body.name, 
            shortName: req.body.shortName, 
            createDate: req.body.createDate},
        {upsert : true},
        function(err, data){
            if(err) { log.logError(err);}
            else {res.sendStatus(201);}
        }
    );
    res.status(201);
});

exports.addTeam = (function(req, res){
    Teams.create(req.body, function(err, data){
        if (err) log.logError(err);
        res.sendStatus(201);
    });
})

exports.deleteOneById = (function(req, res){
    Teams.findByIdAndRemove(req.params.id, function(err, data){
        if(err) {log.logError(err);}
            else {res.sendStatus(200);}
    });
})

exports.updateById = (function(req, res){
    Teams.update({_id:req.body._id}, req.body, {upsert:true}, function(err, data){
        if(err) {log.logError(err);}
        else {res.sendStatus(200);}
    })
})
