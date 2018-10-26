

function isStudent(req, res, next) {
    console.log(req.session)
    // res.send(req.session)
    // undefined.isLoggedIn
    if (req.session.user.name == 'yaya@mail.com') {
        next()
    }
    else {
        res.redirect('/')
    }
}

module.exports = isStudent;

