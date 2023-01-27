const app = require('../app')
const request = require('supertest')

describe('GET /ping', () => {

  test('should return pong', async () => {
    const res = await request(app).get('/ping')
    expect(res.body.msg).toContain('pong')
  })

})
