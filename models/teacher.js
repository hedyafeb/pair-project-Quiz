'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.hasMany(models.Question)
  };

  
  return Teacher;
};