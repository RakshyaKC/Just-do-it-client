'use strict'
const config = require('../config.js')
const store = require('../store.js')

const thirtyMin = data => {
  console.log(`got the localhost:4741/videos/thirty/alllevels`)
  return $.ajax({
    url: config.apiUrl + `/videos/thirty/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const fortyfiveMin = () => {
  console.log('FortyfiveMin running')
  return $.ajax({
    url: config.apiUrl + `/videos/fortyfive/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sixtyMin = () => {
  console.log('SixtyMin running')
  return $.ajax({
    url: config.apiUrl + `/videos/sixty/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  thirtyMin,
  fortyfiveMin,
  sixtyMin
}
