'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pertanyaan = sequelize.define('Pertanyaan', {
    question: DataTypes.STRING,
  }, {});
  Pertanyaan.associate = function(models) {
    // associations can be defined here
    Pertanyaan.belongsToMany(models.Jawaban, {through : 'JawabanSoal'})
  };
  return Pertanyaan;
};