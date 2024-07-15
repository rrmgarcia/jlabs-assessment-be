import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const History = sequelize.define('History', {
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  geoInfo: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

export default History;
