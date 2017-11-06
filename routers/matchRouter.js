const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');

 router.get('/', matchController.matches_list);
 router.get('/:id', matchController.getById);

 router.put('/', matchController.upsertById);

 router.delete('/:id', matchController.deleteById);

 router.get('/status/:status', matchController.getByStatus);

module.exports = router;