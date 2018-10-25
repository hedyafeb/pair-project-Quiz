const { Student } = require('../models/index.js')

class StudentController {
    static loginForm(req, res) {
        res.render('student-login.ejs')
    }
}

module.exports = StudentController;