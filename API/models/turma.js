'use strict';
module.exports = (sequelize, DataTypes) => {
  const turma = sequelize.define('turma', {
    data_inicio: DataTypes.DATEONLY
  }, {paranoid: true});
  turma.associate = function(models) {
    // associations can be defined here
    turma.hasMany(models.matriculas, {foreignKey: 'turma_id'});
    turma.belongsTo(models.pessoas, {foreignKey: 'docente_id'});
    turma.belongsTo(models.nivel, {foreignKey: 'nivel_id'});
  };
  return turma;
};