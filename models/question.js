'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    description: DataTypes.STRING,
    correctAnswer: DataTypes.STRING,
    TeacherId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.hasMany(models.StudentQuestion)
    Question.belongsTo(models.Teacher)
    Question.hasMany(models.PossibleAnswer)
  };
  return Question;
};