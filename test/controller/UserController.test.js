/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../../src/app')

describe('Testing routes', () => {
  it('The route /api/users/:username/details return user details', async () => {
    const response = await request(app)
      .get('/api/users/coutocouto/details')

    expect(response._body.userLogin).toBe('coutocouto')
    expect(response._body.userId).toBe(44660446)
    expect(response._body.userUrlProfile).toBe('https://github.com/coutocouto')
    expect(response._body.userCreateDate).toBe('2018-11-01T03:38:38Z')
  })
  it('The route /api/users returns status 200', async () => {
    const response = await request(app)
      .get('/api/users?since=1')

    expect(response.status).toBe(200)
  })
  it('The route /api/users/:username/repos returns status 200', async () => {
    const response = await request(app)
      .get('/api/users/coutocouto/repos')

    expect(response.status).toBe(200)
  })
  it('The route /api/users?since=1 return 404 with not a params', async () => {
    const response = await request(app)
      .get('/api/users?since=')

    expect(response.status).toBe(404)
  })
  it('The route /api/users/:username/repos returns status 404 if username no exist', async () => {
    const response = await request(app)
      .get('/api/users//repos')

    expect(response.status).toBe(404)
  })
  it('The route /api/user/:username/details return status 404 if username no exist', async () => {
    const response = await request(app)
      .get('/api/users//details')

    expect(response.status).toBe(404)
  })
})
