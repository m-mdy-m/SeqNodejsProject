const Sequelize = require("sequelize");

const sequelize = require("../database/database");

const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name : {
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false
  },
  comments:{
    type:Sequelize.STRING,
    allowNull:false
  },
});

module.exports = Users