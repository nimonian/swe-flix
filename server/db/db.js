const Sequelize = require('sequelize')
const path = require('path')

const db = new Sequelize({
  dialect: 'sqlite',
  logging: true,
  storage: path.join(__dirname, 'db.sqlite')
  // storage: './db.sqlite' <-- this will sometimes duplicate db.sqlite elsewhere!
})

module.exports = db
