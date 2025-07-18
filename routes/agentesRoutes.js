const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/agentes', agentesController.getAllAgentes);
router.get('/agentes/:id', agentesController.getAgentesById);

router.post('/agentes', agentesController.createAgente);

module.exports = router
