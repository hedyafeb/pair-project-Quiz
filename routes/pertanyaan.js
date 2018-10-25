const router = require('express').Router()
const Cpertanyaan = require('../controllers/pertanyaan.controller')

router.get('/', Cpertanyaan.display)

module.exports = router