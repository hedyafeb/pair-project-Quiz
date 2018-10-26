const router = require('express').Router()
const StudentController = require('../controllers/studentController.js')
const auth = require('../middlewares/auth.js')
const isStudent = require('../middlewares/isStudent')

router.post('/register', StudentController.register) 
router.get('/login', StudentController.loginForm)
router.post('/login',StudentController.login)
router.get('/homepage',auth, isStudent, StudentController.homepage)
router.get('/answerQuestions',auth, isStudent,StudentController.readAllQuestions) // add auth
router.post('/result',auth, isStudent, StudentController.result) // add auth
router.get('/readResult',auth, isStudent, StudentController.readResult)
router.get('/readStudentQuestion',auth, isStudent, StudentController.readAllStudentQuestions)
router.get('/logout', auth, StudentController.logout)


module.exports = router

