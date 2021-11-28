const { Router } = require('express');
// Para luego agregar validaciones
const { check } = require('express-validator');
const { quotesGet, quotesScrap } = require('../controllers/quotes');

const router = Router();

router.get('/get', quotesGet );

router.get('/scrap/get', quotesScrap );

module.exports = router;