'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('nivels', [{
        descr_nivel: 'Iniciante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Profissional',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Superior',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
