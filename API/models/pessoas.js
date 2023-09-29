'use strict';
module.exports = (sequelize, DataTypes) => {
  const pessoas = sequelize.define('pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  pessoas.associate = function(models) {
    // associations can be defined here
    pessoas.hasMany(models.turma, {foreignKey: "docente_id"});
    pessoas.hasMany(models.matriculas, {foreignKey: "estudante_id"});
  };
  return pessoas;
};