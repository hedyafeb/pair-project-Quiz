'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentQuestion = sequelize.define('StudentQuestion', {
    StudentId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    currentAnswer: DataTypes.STRING
  }, {});
  StudentQuestion.associate = function(models) {
    // associations can be defined here
    StudentQuestion.belongsTo(models.Student)
    StudentQuestion.belongsTo(models.Question)
  };
  return StudentQuestion;
};