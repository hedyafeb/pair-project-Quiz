'use strict';
module.exports = (sequelize, DataTypes) => {
  const JawabanSoal = sequelize.define('JawabanSoal', {
    JawabanId: DataTypes.INTEGER,
    PertanyaanId: DataTypes.INTEGER
  }, {});
  JawabanSoal.associate = function(models) {
    // associations can be defined here StudentSubject.belongsTo(models.Student)
    JawabanSoal.belongsTo(models.Jawaban)
    JawabanSoal.belongsTo(models.Pertanyaan)
  };
  return JawabanSoal;
};