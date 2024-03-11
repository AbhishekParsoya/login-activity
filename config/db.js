// sequelize.js
const { Sequelize } = require('sequelize');

const db = new Sequelize('login_activity', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql', // Use the appropriate dialect for your database
});

module.exports = db;
