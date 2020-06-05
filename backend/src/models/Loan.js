const Sequelize = require('sequelize');
const sequelize = require('../database');

const Loan = sequelize.define('loans', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  'days_loan': {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.TEXT
  },
  'start_date': {
    type: Sequelize.DATE
  },
  'end_date': {
    type: Sequelize.DATE
  },
  'inventory_id': {
    type: Sequelize.INTEGER
  },
  'user_id': {
    type: Sequelize.INTEGER
  }
},{
  timestamps: false
});

module.exports = Loan;