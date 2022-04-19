'use strict'

const supertest = require('supertest')
const httpStatus = require('http-status')

const app = require('../index')
const Author = require('../api/author/author.model')
const JWToken = require('../libs/jwToken')

afterAll((done) => {
  Author.deleteMany({})
    .then(() => done())
    .catch(done)
})

describe('Author API specs', () => {
  let author
  const authorData = {
    name: 'author123',
    jobTitle: '1234567890'
  }
  const token = JWToken.create(authorData, '10m')

  describe('POST /api/authors', () => {
    test('should create new author', (done) => {
      supertest(app)
        .post('/api/authors')
        .send(authorData)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).toHaveProperty('_id')
          expect(res.body.authorname).toEqual(authorData.authorname)
          expect(res.body.mobileNumber).toEqual(authorData.mobileNumber)
          expect(res.body).not.toHaveProperty('password')
          author = res.body
          return done()
        })
        .catch(done)
    })
    test('should return - duplicate key error', (done) => {
      supertest(app)
        .post('/api/authors')
        .send(authorData)
        .expect(httpStatus.BAD_REQUEST)
        .then(() => done())
        .catch(done)
    })
  })

  describe('GET /api/authors', () => {
    test('should return authors - with skip, limit', async (done) => {
      const skip = 0
      const limit = 50
      supertest(app)
        .get(`/api/authors?limit=${limit}&skip=${skip}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy()
          return done()
        })
        .catch(done)
    })
    test('should return authors - without skip, limit', async (done) => {
      supertest(app)
        .get(`/api/authors`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(Array.isArray(res.body)).toBeTruthy()
          return done()
        })
        .catch(done)
    })
  })
})
