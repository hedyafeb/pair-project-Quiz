const router = require('express').Router()
const teacher = require('./teacher.js')
// const student = require('./student.js')
const studentQuestion = require('./studentQuestion.js')
const pertanyaan = require('./pertanyaan')

// router.get('/', (req, res) => {
//     res.render('index.ejs')
// })

router.use('/', teacher)
// router.use('/student', student)
router.use('/', studentQuestion)
router.use('/questions', pertanyaan)

// router.get('*', (rq, rs) => res.status(404).render())

module.exports = router


// Quizzionaire 
// multer