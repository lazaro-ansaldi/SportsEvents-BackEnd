var express = require('express');
var router = express.Router();

var teamController = require('../controllers/teamController');

router.get('/', teamController.teams_list);

router.get('/find/:id', teamController.getOneById);

router.post('/insert/', teamController.upsert);

router.post('/update/', teamController.upsert);

router.delete('/delete/:id', teamController.deleteOneById);

module.exports = router;