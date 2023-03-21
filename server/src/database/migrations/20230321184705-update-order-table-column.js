'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderTable', 'totalOrderQty', {
      type: Sequelize.INTEGER,
      primaryKey: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderTable', 'totalOrderQty', {
      type: Sequelize.STRING,
      primaryKey: true,
    });
  }
};
