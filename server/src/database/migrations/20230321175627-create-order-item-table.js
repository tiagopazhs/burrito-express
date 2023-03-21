'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItemTable', {
      keyOrderId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      itemOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      itemName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      itemQty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      itemValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalItemValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItemTable');
  }
};