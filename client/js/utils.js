function setLiked (id, videos, val) {
  const video = videos.find(v => v.id === id)

  if (!video) throw new Error('Video not found')

  video.liked = val
}

function setLikedAsync (id, videos, val) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const video = videos.find(v => v.id === id)

      if (!video) return reject('Video not found')
    
      video.liked = val
      resolve()
    }, 10000)

  })

}

module.exports = { setLiked, setLikedAsync }
