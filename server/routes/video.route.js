const express = require('express')
const videoRouter = express.Router()
const { Video } = require('../models')

// /video is automatically prefixed onto any endpoint in this file

videoRouter.get('/', async (req, res) => {
  const videos = await Video.findAll()
  res.send(videos)
})

videoRouter.get('/:id', async (req, res) => {
  const video = await Video.findByPk(req.params.id)
  if (video) {
    res.status(200).send(video)
  } else {
    res.sendStatus(404)
  }
})

videoRouter.post('/', async (req, res) => {
  try {
    const video = await Video.create(req.body)
    res.status(201).send(video)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = videoRouter