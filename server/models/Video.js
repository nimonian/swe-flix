const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Video extends Model {}

Video.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING
  }
}, { sequelize: db })

module.exports = Video
