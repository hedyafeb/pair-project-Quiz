const router = require('express').Router()
const TeacherController = require('../controllers/TeacherController.js')
const auth = require('../middlewares/auth.js')
const isTeacher = require('../middlewares/isTeacher')

router.post('/register', TeacherController.register) 
router.get('/login', TeacherController.loginForm)
router.post('/login', TeacherController.login)
router.get('/homepage', auth,isTeacher, TeacherController.homepage)
router.get('/createNewQuestion', auth,isTeacher, TeacherController.readAllQuestions)
router.post('/createNewQuestion', auth,isTeacher, TeacherController.createNewQuestion)
router.get('/deleteQuestion/:questionId', auth,isTeacher, TeacherController.deleteQuestion)
router.get('/logout', auth, TeacherController.logout)
 
module.exports = router