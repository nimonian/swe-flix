const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Video extends Model {}

Video.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  liked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  watched: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, { sequelize: db })

module.exports = Video
