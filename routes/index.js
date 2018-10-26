const router = require('express').Router()
const teacher = require('./teacher.js')
const student = require('./student.js')
const auth = require('../middlewares/auth')
const isStudent = require('../middlewares/isStudent')

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.use('/teacher', auth, teacher)
router.use('/student', student)
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/')
        }
    })
    // res.redirect('/') // blom ada session
})

// router.get('*', (req, res) => res.status(404).render())

module.exports = router


// Quizzionaire 
// multer