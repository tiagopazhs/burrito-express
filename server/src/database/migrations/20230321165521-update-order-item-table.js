'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('OrderItemTable', 'orderId', 'oldOrderId');
    await queryInterface.addColumn('OrderItemTable', 'keyOrderId', {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    });
    await queryInterface.addColumn('OrderItemTable', 'orderId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn('OrderItemTable', 'itemQty', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.removeColumn('OrderItemTable', 'itemOrder');
    await queryInterface.removeColumn('OrderItemTable', 'itemValue');
    await queryInterface.removeColumn('OrderItemTable', 'totalItemValue');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('OrderItemTable', 'itemOrder', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn('OrderItemTable', 'itemValue', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
    await queryInterface.addColumn('OrderItemTable', 'totalItemValue', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
    await queryInterface.removeColumn('OrderItemTable', 'itemQty');
    await queryInterface.removeColumn('OrderItemTable', 'orderId');
    await queryInterface.renameColumn('OrderItemTable', 'oldOrderId', 'orderId');
    await queryInterface.removeColumn('OrderItemTable', 'keyOrderId');
  }
};
