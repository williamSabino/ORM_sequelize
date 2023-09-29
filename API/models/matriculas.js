'use strict';
module.exports = (sequelize, DataTypes) => {
  const matriculas = sequelize.define('matriculas', {
    status: DataTypes.STRING
  }, {});
  matriculas.associate = function(models) {
    // associations can be defined here
    matriculas.belongsTo(models.pessoas, {foreignKey: "estudante_id"});
    matriculas.belongsTo(models.turma, {foreignKey: "turma_id"});
  };
  return matriculas;
};