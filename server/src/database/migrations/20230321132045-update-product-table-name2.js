module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('ProductTables', 'ProductTable');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('ProductTables', 'ProductTable');
  }
};