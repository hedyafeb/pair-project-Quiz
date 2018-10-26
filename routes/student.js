const router = require('express').Router()
const StudentController = require('../controllers/studentController.js')
const auth = require('../middlewares/auth.js')

router.post('/register', StudentController.register) 
router.get('/login', StudentController.loginForm)
router.post('/login', StudentController.login)
// router.get('/welcomePage', StudentController.welcomePage)
router.get('/answerQuestions', StudentController.readAllQuestions) // add auth
router.post('/result', StudentController.result) // add auth
router.get('/readResult', StudentController.readResult)
router.get('/readStudentQuestion', StudentController.readAllStudentQuestions)


module.exports = router

