const model = require('../models')

module.exports = {
    display: (req, res) => {
        model.Pertanyaan.findAll({
            include: [{
                model: model.Jawaban
            }]            
        })
            .then(data => {
                // res.json(data)
                res.render('soal', {data:data})
            })
            .catch()
    }
}