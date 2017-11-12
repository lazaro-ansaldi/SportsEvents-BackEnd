const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');
 
 router.get('/:matchId', eventController.eventsByTeamId);

 router.put('/', eventController.addEvent);

 //router.delete('/:id', eventController.deleteById);

module.exports = router;