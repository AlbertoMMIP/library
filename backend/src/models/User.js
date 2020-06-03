import Sequelize from 'sequelize';
import { sequelize } from '../database';
import Loan from '../models/Loan';

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  middle_name: {
    type: Sequelize.TEXT,
  },
  last_name: {
    type: Sequelize.TEXT
  },
  sex: {
    type: Sequelize.TEXT
  },
  birtdate: {
    type: Sequelize.DATE
  },
  cell_phone: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  rol: {
    type: Sequelize.TEXT
  }
},{
  timestamps: false
});

User.hasMany(Loan, {foreingKey: 'user_id', sourceKey: 'id'});
Loan.belongsTo(User, {foreingKey: 'user_id', sourceKey: 'id'});

export default User;