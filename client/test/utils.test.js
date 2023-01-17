const { setLiked, setLikedAsync } = require('../js/utils')

describe('setLiked', () => {

  test('should set liked to true', () => {

    const videos = [{ id: 'abc', liked: false }]
    setLiked('abc', videos, true)
    expect(videos[0].liked).toBe(true)

  })

  test('should set liked to false', () => {

    const videos = [{ id: 'xyz', liked: true }]
    setLiked('xyz', videos, false)
    expect(videos[0].liked).toBe(false)

  })

  test('should throw an error', () => {

    const videos = [{ id: 'xyz', liked: true }]
    expect(() => setLiked('abc', videos, false)).toThrow('Video not found')

  })

  test('hmm', () => {
    expect([1, 2]).toEqual([1, 2])
  })

})
