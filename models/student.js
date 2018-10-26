'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    totalScore: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.hasMany(models.StudentQuestion)
    // Student.belongsToMany(models.Question, {through : 'StudentQuestion'})
  };



  return Student;
};