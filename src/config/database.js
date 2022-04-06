const Sequelize = require('sequelize');

const sequelize = new Sequelize("hoaxlfy", "my-db-user", "db-p4ss", {
  dialect: "sqlite",
  storage: './database.sqlite',
  logging: false,
});

module.exports = sequelize;
