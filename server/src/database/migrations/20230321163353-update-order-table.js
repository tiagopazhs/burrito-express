'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('OrderTable', 'totalOrderQty', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn('OrderTable', 'orderId', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('OrderTable', 'totalOrderQty', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
    await queryInterface.removeColumn('OrderTable', 'orderId');
  }
};
