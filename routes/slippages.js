const { Router } = require('express');
// Para luego agregar validaciones
const { check } = require('express-validator');
const { slippagesGet } = require('../controllers/slippages');


const router = Router();

router.get('/get', slippagesGet)


module.exports = router;