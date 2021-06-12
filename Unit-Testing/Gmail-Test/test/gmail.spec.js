const assert = require('assert')
const app = require('../../../Nodejs/Google-OAuth-Nodejs/app')
const request = require('supertest')

describe('Get with Gmail', (done) => {
  it('Get /google', (done) => {
    request(app)
      .get('/google')
      .expect(302)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })

  it('Get /google/callback', (done) => {
    request(app)
      .get('/google/callback')
      .expect(302)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })

  it('Get /users', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })

  it('Get /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done()
      })
  })
})