function auth(req, res, next) {
    // res.send(req.session)
    if (req.session.user.isLoggedIn == true) {
        next()
    }
    else {
        res.redirect('/')
    }
}

module.exports = auth;