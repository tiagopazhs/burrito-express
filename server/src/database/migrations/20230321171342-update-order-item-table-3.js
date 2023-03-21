'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderItemTable', 'keyOrderId', {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    });

    await queryInterface.addColumn('OrderItemTable', 'itemOrder', {
      type: Sequelize.INTEGER
    });

    await queryInterface.addColumn('OrderItemTable', 'itemValue', {
      type: Sequelize.FLOAT
    });

    await queryInterface.addColumn('OrderItemTable', 'totalItemValue', {
      type: Sequelize.FLOAT
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderItemTable', 'keyOrderId', {
      type: Sequelize.INTEGER,
      allowNull: false
    });

    await queryInterface.removeColumn('OrderItemTable', 'itemOrder');
    
    await queryInterface.removeColumn('OrderItemTable', 'itemValue');
    
    await queryInterface.removeColumn('OrderItemTable', 'totalItemValue');
  }
};
