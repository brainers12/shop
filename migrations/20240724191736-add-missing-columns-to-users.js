'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('Users', 'postalCode', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'default postal code', // Adjust as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'postalCode');
  }
};
