const { Teacher } = require('../models/index.js')
const { PossibleAnswer } = require('../models/index.js')
const { Question } = require('../models/index.js')

class TeacherController {
    static register(req, res) {
        Teacher.create(req.body)
            .then(() => {
                res.send(`You have been registered. Thank you`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginForm(req, res) {
        res.render('teacher-login.ejs')
    }

    static login(req, res) {
        let email = req.body.email
        let password = req.body.password
        Teacher.findOne(
            { where: { email, password } }
        )
        .then(teacher => {
            req.session.user = {
                isLoggedIn: true,
                email: teacher.email,
                password: teacher.password,
                TeacherId: teacher.id
            } // nnti bisa req.session.user = student
            res.redirect('/teacher/createNewQuestion')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static readAllQuestions(req, res) {
        Question.findAll(
            { include: [PossibleAnswer] }
        )
            .then(questions => {
                // res.send(questions)
                res.render('teacher-createQuestion.ejs', { questions })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static welcomePage(req, res) {
        // res.send(`helloo teacher!`)
        res.redirect('/teacher/createNewQuestion')
    }

    static createNewQuestion(req, res) {
        let possibleAnswer = [
            { key: 'A', description: req.body.answer[0] },
            { key: 'B', description: req.body.answer[1] },
            { key: 'C', description: req.body.answer[2] },
            { key: 'D', description: req.body.answer[3] }
        ]
        // res.send(possibleAnswer)
        Question.create({
            description: req.body.description,
            correctAnswer: req.body.correctAnswer,
            TeacherId: 1, // masukin session
            PossibleAnswers: possibleAnswer
        }, {
                include: [PossibleAnswer]
            })
            .then(() => {
                res.redirect('/teacher/createNewQuestion')
            })
            .catch(err => {
                res.send(err)
            })
    }




}

module.exports = TeacherController;
