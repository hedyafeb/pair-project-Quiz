'use strict';
module.exports = (sequelize, DataTypes) => {
  const PossibleAnswer = sequelize.define('PossibleAnswer', {
    QuestionId: DataTypes.INTEGER,
    key: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  PossibleAnswer.associate = function(models) {
    // associations can be defined here
    PossibleAnswer.belongsTo(models.Question)
  };
  return PossibleAnswer;
};