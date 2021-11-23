const { Router } = require('express');
const { check } = require('express-validator');
const { quotesGet } = require('../controllers/quotes')


const router = Router();

router.get('/get', quotesGet )


module.exports = router;