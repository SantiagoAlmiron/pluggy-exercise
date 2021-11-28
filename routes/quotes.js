const { Router } = require('express');
// Para luego agregar validaciones
const { check } = require('express-validator');
const { quotesGet, quotesCreate } = require('../controllers/quotes');

const router = Router();

router.get('/get', quotesGet );

router.post('/post', quotesCreate );

module.exports = router;