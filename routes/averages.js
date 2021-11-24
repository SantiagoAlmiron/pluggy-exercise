const { Router } = require('express');
// Para luego agregar validaciones
const { check } = require('express-validator');
const { averageGet } = require('../controllers/averages')


const router = Router();

router.get('/get', averageGet )


module.exports = router;