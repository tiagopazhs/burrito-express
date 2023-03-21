'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderItemTable', 'keyOrderId', {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderItemTable', 'keyOrderId', {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    });
  }
};
