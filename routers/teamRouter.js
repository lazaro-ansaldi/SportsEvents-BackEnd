var express = require('express');
var router = express.Router();

var teamController = require('../controllers/teamController');

router.get('/', teamController.teams_list);

module.exports = router;