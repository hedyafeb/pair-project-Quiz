function auth(req, res, next) {
    console.log(req.session)
    // res.send(req.session)
    // undefined.isLoggedIn
    if (req.session.user && req.session.user.isLoggedIn == true) {
        next()
    }
    else {
        res.redirect('/')
    }
}

module.exports = auth;