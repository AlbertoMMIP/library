const Sequelize = require('sequelize');
const { sequelize } = require('../database');
const Inventory  = require('../models/Inventory');

const Book = sequelize.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  urlImage: {
    type: Sequelize.TEXT
  },
  register_date: {
    type: Sequelize.DATE
  },
  author: {
    type: Sequelize.TEXT
  }
},{
  timestamps: false
});

Book.hasMany(Inventory, {foreingKey: 'book_id', sourceKey: 'id'});
Inventory.belongsTo(Book,  {foreingKey: 'book_id', sourceKey: 'id'});

module.exports =  Book;