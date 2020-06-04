const Sequelize = require('sequelize');
const sequelize = require('../database');
const Loan = require('../models/Loan');

const Inventory = sequelize.define('inventories', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  'inventory_code': {
    type: Sequelize.TEXT
  },
  'book_id': {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.TEXT
  }
},{
  timestamps: false
});

Inventory.hasMany(Loan, {foreingKey: 'inventory_id', sourceKey: 'id'});
Loan.belongsTo(Inventory,  {foreingKey: 'inventory_id', sourceKey: 'id'});

module.exports = Inventory;