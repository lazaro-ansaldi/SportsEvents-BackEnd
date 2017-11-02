const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');

router.get('/', teamController.teams_list);

router.get('/:id', teamController.getOneById);

router.put('/', teamController.upsert);

router.delete('/:id', teamController.deleteOneById);

module.exports = router;