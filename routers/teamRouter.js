const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');

router.get('/', teamController.teams_list);

router.get('/:id', teamController.getOneById);

router.put('/', teamController.upsertById);

router.delete('/:id', teamController.deleteById);

module.exports = router;