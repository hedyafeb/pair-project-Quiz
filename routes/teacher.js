const router = require('express').Router()
const teacherController = require('../controllers/teacherController.js')
 
// router.post('/register', teacherController.register) 
router.get('/login', teacherController.loginForm)
// router.post('/login', teacherController.login)
// router.get('/welcomePage', teacherController.welcomePage)

 
module.exports = router