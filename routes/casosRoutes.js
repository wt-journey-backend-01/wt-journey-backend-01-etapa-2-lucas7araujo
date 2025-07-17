const express = require('express')
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/casos', casosController.getAllCasos)

module.exports = router
