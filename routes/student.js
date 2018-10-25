const router = require('express').Router()
const studentController = require('../controllers/studentController.js')
 
// router.post('/register', studentController.register) 
router.get('/login', studentController.loginForm)
// router.post('/login', studentController.login)
// router.get('/welcomePage', studentController.welcomePage)

module.exports = router