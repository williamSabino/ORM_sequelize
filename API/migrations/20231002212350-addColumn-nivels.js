'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('nivels', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('nivels', 'deletedAt');
    }
};