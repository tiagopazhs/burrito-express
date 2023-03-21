'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderTable', {
      orderId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      totalOrderQty: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalOrderValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderTable');
  }
};