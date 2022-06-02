const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/config');

module.exports = { 
  User : sequelize.define('user_ms', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 

    email: {
      type: DataTypes.STRING,
      unique: true
    },

    hashed_password: {
      type: DataTypes.STRING,
    },

    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  }, 
  {
    timestamps: false,
    freezeTableName: true
  })


}