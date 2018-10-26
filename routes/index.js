const router = require('express').Router()
const teacher = require('./teacher.js')
const student = require('./student.js')

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.use('/teacher', teacher)
router.use('/student', student)
router.get('/logout', (req, res) => {
    res.redirect('/') // blom ada session
})

// router.get('*', (rq, rs) => res.status(404).render())

module.exports = router


// Quizzionaire 
// multer