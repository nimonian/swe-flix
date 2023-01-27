const express = require('express')
const cors = require('cors')
const { videoRouter } = require('./routes')

const app = express()

app.use(express.json())
app.use(cors()) // allows cross-origin requests from any url

// http://localhost:5000/ping
// req contains information sent by the user
// res is what we send back
app.get('/ping', (req, res) => {
  res.send({ msg: 'pong!!!' }) // automatically encoded as json by express.json() middleware!
})

app.use('/video', videoRouter)

module.exports = app
