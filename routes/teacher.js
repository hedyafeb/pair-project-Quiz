const router = require('express').Router()
const TeacherController = require('../controllers/TeacherController.js')
const auth = require('../middlewares/auth.js')
 
router.post('/register', TeacherController.register) 
router.get('/login', TeacherController.loginForm)
router.post('/login', TeacherController.login)
// router.get('/welcomePage', auth, TeacherController.welcomePage)
router.get('/createNewQuestion', auth, TeacherController.readAllQuestions)
router.post('/createNewQuestion', auth, TeacherController.createNewQuestion)
// router.get('/welcomePage', TeacherController.createQuestionForm)
// router.post('/welcomePage', TeacherController.createQuestion)

 
module.exports = router