'use strict';
module.exports = (sequelize, DataTypes) => {
  const pessoas = sequelize.define('pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaovalidadora: function (valor) {
          if (valor.length < 3) throw new Error("Nome deve possuir mais que 3 caracteres.");
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Dados do Email invalidos !!"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    paranoid: true,
    defaultScope: { where: { ativo: true } },
    scopes: {
      todos: { where: {} }
    }
  },
  );
  pessoas.associate = function (models) {
    // associations can be defined here
    pessoas.hasMany(models.turma, { foreignKey: "docente_id" });
    pessoas.hasMany(models.matriculas,
      {
        foreignKey: "estudante_id",
        scope: { status: "confirmado"},
        as: "matriculasConfirmadas",
      });
  };
  return pessoas;
};