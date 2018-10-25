const model = require('../models')
// console.log(model.Question)
class Answer{
    static studentAnswer(req,res){
        model.Question.findAll()
        
        .then(data=> {
            res.render('studentQuestion',{data:data})
        })
    }
    static getAnswer(req,res){

    }
}
module.exports = Answer
