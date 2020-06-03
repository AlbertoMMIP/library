import Sequelize from 'sequelize';
import { sequelize } from '../database';
import Loan from '../models/Loan';

const Inventory = sequelize.define('inventories', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  inventory_code: {
    type: Sequelize.TEXT
  },
  book_id: {
    type: Sequelize.INTEGER
  }
},{
  timeStamps: false
});

Inventory.hasMany(Loan, {foreingKey: 'inventory_id'});
export default Inventory;