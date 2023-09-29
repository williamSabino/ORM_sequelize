'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pessoas', [{
        nome: 'william sabino',
        ativo: 1,
        email: 'william@gmail.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'andresa urach',
        ativo: 1,
        email: 'urach@gmail.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'jean marquinho',
        ativo: 1,
        email: 'jean@gmail.com.br',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'antonio fagundes',
        ativo: 1,
        email: 'fagundes@yahoo.com.br',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'paula fernandes',
        ativo: 0,
        email: 'paula@yahoo.com.br',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
