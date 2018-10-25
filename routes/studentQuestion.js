const router = require('express').Router()
const questionController = require('../controllers/studentAnswer')
router.get('/',questionController.studentAnswer)
module.exports = router