'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'address', {
      type: Sequelize.STRING,
      allowNull: true, // Adjust if you want this column to allow nulls initially
      defaultValue: 'default address', // Provide a default value to avoid null constraint issues
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'address');
  }
};
