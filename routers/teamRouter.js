const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');

//ToDo: use the "upsert" method from controller to update/insert objects
router.get('/', teamController.teams_list);

router.get('/find/:id', teamController.getOneById);

router.post('/insert', teamController.addTeam);

router.post('/update', teamController.updateById);

router.delete('/delete/:id', teamController.deleteOneById);

module.exports = router;