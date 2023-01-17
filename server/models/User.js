const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class User extends Model {}

// User is a Model, it is connected with a Table in the DB
// .init() is a method that accepts two parameters:
User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, { sequelize: db }) // <-- this tells sequelize which db to put the table in!

module.exports = User
