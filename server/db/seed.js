const db = require('./db')
const { User, Video } = require('../models')

async function seed () {

  await db.sync({ force: true }) // <-- don't do this in prod! it drops ALL TABLES!

  const user = await User.create({
    username: 'blahblah',
    email: 'em@il.com'
  })

  const users = await User.bulkCreate([
    { username: 'imran', email: 'hi@email.com' },
    { username: 'joe', email: 'hey@joe.com' }
  ])

  const videos = await Video.bulkCreate([
    {
      title: 'How To Build A Chat App With React And Stream',
      url: 'https://www.youtube.com/watch?v=Een66E0X_os',
      description: 'Building a chat application is hard, especially if you want it to be a robust and full featured app similar to Facebook Messenger. In this video I will show you how you can use Stream to build out an incredibly robust chat system with ease.'
    },
    {
      title: 'Learn DOM Manipulation In 18 Minutes',
      url: 'https://www.youtube.com/watch?v=y17RuWkWdn8',
      description: 'DOM manipulation is tough. There are lots of methods and techniques you need to master and it is not obvious which methods are best for each scenario. In this video I cover the 14 most important DOM manipulation methods that you need to know.'
    },
    {
      title: 'JavaScript Shopping Cart Tutorial for Beginners',
      url: 'https://www.youtube.com/watch?v=YeFzkC2awTM&list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6',
      description: 'In this video we will learn how to utilize JavaScript to add functionality to a shopping cart. We will cover how to check if the document is loaded, and how to query the document for elements by class, how to add events to elements. We will then combine all of these techniques to make the shopping cart in our web page work in an intuitive way.'
    }
  ])

  await users[1].addVideo(videos[2])

}

seed()
