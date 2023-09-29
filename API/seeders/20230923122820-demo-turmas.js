'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('turmas', [
       {
        docente_id: 1,
        nivel_id: 2,
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        docente_id: 3,
        nivel_id: 1,
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        docente_id: 4,
        nivel_id: 5,
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        docente_id: 3,
        nivel_id: 2,
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        docente_id: 4,
        nivel_id: 4,
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
