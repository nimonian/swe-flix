const db = require('./db')
const { User, Video } = require('../models')

async function seed () {

  await db.sync({ force: true }) // <-- don't do this in prod! it drops ALL TABLES!

  const user = await User.create({
    username: 'blahblah',
    email: 'em@il.com'
  })

  await User.bulkCreate([
    { username: 'imran', email: 'hi@email.com' },
    { username: 'joe', email: 'hey@joe.com' }
  ])

  const video = await Video.create({
    description: 'All about JAVA!'
  })

  const video2 = await Video.create({
    description: 'All about C#!'
  })

  await user.addVideo(video) // <-- magic method added by sequelize

}

seed()
