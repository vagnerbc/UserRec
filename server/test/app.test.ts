import request from 'supertest'
import app from '../src/server'

describe('App test', () => {
  it('should return 200 OK', () => {
    return request(app).get('/').expect(200)
  })
})
