const User = require('./User')
const Video = require('./Video')

// 1. to many relationship
User.hasMany(Video)
Video.belongsTo(User)

module.exports = { User, Video }
