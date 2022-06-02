require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.AWS_DATABASE, process.env.AWS_USER, process.env.AWS_PASSWORD, {
  host: process.env.AWS_HOST,
  dialect: 'postgres'
});

module.exports = sequelize