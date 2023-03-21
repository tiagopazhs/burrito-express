'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('OrderTable', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('OrderTable', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('OrderTable', 'lastName');
    await queryInterface.removeColumn('OrderTable', 'updatedAt');
  }
};