'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jawaban = sequelize.define('Jawaban', {
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  Jawaban.associate = function(models) {
    // associations can be defined here
    Jawaban.belongsToMany(models.Pertanyaan, {through : 'JawabanSoal'})
  };
  return Jawaban;
};