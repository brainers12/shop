'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'mobileNumber', {
      type: Sequelize.STRING,
      allowNull: true, // Allow null values initially
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'mobileNumber');
  }
};



