'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ProductTable', 'lastName');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('ProductTable', 'lastName', {
      type: Sequelize.STRING
    });
  }
};;
