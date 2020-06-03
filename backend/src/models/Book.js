import Sequelize from 'sequelize';
import { sequelize } from '../database';
import Inventory  from '../models/Inventory';

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
  timeStamps: false
});

Book.hasMany(Inventory, {foreingKey: 'book_id'});

export default Book;