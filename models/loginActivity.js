// models/loginActivity.js
const db = require('../config/db');

const LoginActivity = db.define('login_activities', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: db.Sequelize.DATE,
    allowNull: false,
    defaultValue: db.Sequelize.NOW,
  },
  success: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = LoginActivity;
