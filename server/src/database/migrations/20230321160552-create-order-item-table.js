'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItemTable', {
      orderId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      itemOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      itemName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      itemValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalItemValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItemTable');
  }
};