import Sequelize from 'sequelize';
import { sequelize } from '../database';

const Loan = sequelize.define('loans', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  days_loan: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.TEXT
  },
  loan_date: {
    type: Sequelize.DATE
  },
  inventory_id: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  },
},{
  timeStamps: false
});

export default Loan;