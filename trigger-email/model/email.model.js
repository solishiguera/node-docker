const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/config');

module.exports = { 
  Email : sequelize.define('email_ms', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 

    from_email: {
      type: DataTypes.STRING
    },
    
    to_email: {
      type: DataTypes.STRING
    },

    content: {
      type: DataTypes.STRING
    }

  }, 
  {
    timestamps: false,
    freezeTableName: true
  })


}