require('dotenv').config()

const app = require('../')
const test = require('ava')
const axios = require('axios')

test.before(async t => {
  app.listen()

  axios.defaults.baseURL = `http://localhost:${process.env.PORT}/`
  axios.defaults.validateStatus = (status) => (status >= 200 && status < 500)
})

// import test modules below
require('./api/url-test')(axios, test)
