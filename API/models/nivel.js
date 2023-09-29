'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel = sequelize.define('nivel', {
    descr_nivel: DataTypes.STRING
  }, {});
  nivel.associate = function(models) {
    // associations can be defined here
    nivel.hasMany(models.turma, {foreignKey: "nivel_id"});
  };
  return nivel;
};