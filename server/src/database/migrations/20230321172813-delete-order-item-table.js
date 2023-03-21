'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItemTable');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItemTable', {
      id: {
        keyOrderId: Sequelize.STRING
      },
      orderId: {
        type: Sequelize.INTEGER
      },
      itemQty: {
        type: Sequelize.STRING
      },
      itemOrder: {
        type: Sequelize.INTEGER
      },
      itemValue: {
        type: Sequelize.FLOAT
      },
      totalItemValue: {
        type: Sequelize.FLOAT
      }
    });
  }
};
