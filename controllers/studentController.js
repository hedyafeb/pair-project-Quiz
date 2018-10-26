const { Student } = require('../models/index.js')
const { Question } = require('../models/index.js')
const { PossibleAnswer } = require('../models/index.js')
const { StudentQuestion } = require('../models/index.js')

class StudentController {
    static homepage(req, res) {
        res.render('student-homepage.ejs')
    }

    static register(req, res) {
        Student.create(req.body)
            .then(() => {
                res.send(`You have been registered. Thank you`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginForm(req, res) {
        res.render('student-login.ejs')
    }

    static login(req, res) {
        let name = req.body.name
        let password = req.body.password
        Student.findOne(
            { where: { name, password } }
        )
            .then(student => {
                req.session.user = {
                    isLoggedIn: true,
                    name: student.name,
                    password: student.password
                } // nnti bisa req.session.user = student
                // res.send(req.session)
                res.redirect('/student/homepage')
            })
            .catch(err => {
                res.send('Password or email wrong')

            })
    }

    static readAllQuestions(req, res) {
        Question.findAll(
            { include: [PossibleAnswer, StudentQuestion] }
        )
            .then(questions => {
                // res.send(questions)
                res.render('student-answerQuestion.ejs', { questions })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static readResult(req, res) {
        Student.findById(1) // masih hardcode
            .then(student => {
                // res.send(student)
                res.render('student-result.ejs', {student})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static result(req, res) {
        let result = []
        let reqBody = Object.values(req.body)
        for (let i = 0; i < reqBody.length - 1; i++) {
            let obj = {
                StudentId: 1, // masih hardcode
                QuestionId: reqBody[0][i - 1],
                score: 0,
                currentAnswer: reqBody[i + 1],
                correctAnswer: reqBody[1][i - 1]
            }
            result.push(obj)
        }
        // res.send(result)
        StudentQuestion.bulkCreate(result)
            .then(() => {
                // res.send(`answer recorded`)
                res.redirect('/student/readResult')
            })
            .catch(err => {
                res.send(err)
            })
    }



    static readAllStudentQuestions(req, res) {
        StudentQuestion.findAll()
            .then(data => {
                let result = [];
                data.forEach(dat => result.push(dat.getScore()))
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }
}

module.exports = StudentController;
// kenapa yah iniii??