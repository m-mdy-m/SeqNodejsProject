const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mdy_mmshly13831922", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
