'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('OrderItemTable', 'keyOrderId', {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    });

    await queryInterface.removeColumn('OrderItemTable', 'oldOrderId');

    await queryInterface.changeColumn('OrderItemTable', 'orderId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('OrderItemTable', 'keyOrderId');

    await queryInterface.addColumn('OrderItemTable', 'oldOrderId', {
      type: Sequelize.STRING
    });

    await queryInterface.changeColumn('OrderItemTable', 'orderId', {
      type: Sequelize.STRING,
      allowNull: false,
    });

  }
};
