const { Teacher } = require('../models/index.js')

class TeacherController {
    static loginForm(req, res) {
        res.render('teacher-login.ejs')
    }

    static login(req, res) {
        let username = req.body.username
        let password = req.body.password
        Teacher.findOne(
            { where: {username} }
        )
        .then( teacher => {
            req.session.user = teacher // nnti bisa req.session.user = student
            res.status(404).send(`error login`)
        })
        .catch()
    }
    static createQuiz(req,res){
        res.render('teacherCreateQuestion')
    }
}

module.exports = TeacherController;
