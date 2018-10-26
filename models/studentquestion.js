'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentQuestion = sequelize.define('StudentQuestion', {
    StudentId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    currentAnswer: DataTypes.STRING,
    correctAnswer: DataTypes.STRING
  }, {
    hooks: {
      afterBulkCreate: (studentAnswers, options) => {
        sequelize.models.Student.findOne({
          where: {id: studentAnswers[0].dataValues.StudentId}
        })
        .then( student => {
          student.totalScore = 0
          // console.log('ini studentt',student);
          
          // console.log('ini nooollll', studentAnswers[0]);
          for (let i = 1; i < studentAnswers.length; i++) {
            
            
            console.log(studentAnswers[i].dataValues.currentAnswer, i);
            console.log(studentAnswers[i].dataValues.correctAnswer, i);
            if (studentAnswers[i].dataValues.currentAnswer == studentAnswers[i].dataValues.correctAnswer) {
              console.log(student);
              student.totalScore += 10
              student.save()
            }
          }
        })
      }
    }
  });
  StudentQuestion.associate = function(models) {
    // associations can be defined here
    StudentQuestion.belongsTo(models.Student)
    StudentQuestion.belongsTo(models.Question)
  };

  

  return StudentQuestion;
};

