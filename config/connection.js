const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ShopandSend', 'postgres', 'newpassword', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

module.exports = sequelize;
