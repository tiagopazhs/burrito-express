'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('ProductsTables', 'ProductTables');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('ProductTables', 'ProductsTables');
  }
};
