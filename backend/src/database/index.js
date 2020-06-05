const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SERVER,
    pool:{
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
);

module.exports = sequelize;