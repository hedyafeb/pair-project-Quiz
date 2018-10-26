

function isTeacher(req, res, next) {
    console.log(req.session)
    // res.send(req.session)
    // undefined.isLoggedIn
    if (req.session.user.email == 'hedya@mail.com') {
        next()
    }
    else {
        res.redirect('/')
    }
}

module.exports = isTeacher;

