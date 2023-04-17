const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pesquisar = sequelize.define('Pesquisar', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  termo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Pesquisar;
