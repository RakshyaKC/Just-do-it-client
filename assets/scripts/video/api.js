'use strict'
const config = require('../config.js')
const store = require('../store.js')

const thirtyMinAll = data => {
  return $.ajax({
    url: config.apiUrl + `/videos/thirty/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const thirtyMinInt = data => {
  return $.ajax({
    url: config.apiUrl + `/videos/thirty/intermediate`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const fortyfiveMinAll = () => {
  console.log('FortyfiveMinAll running')
  return $.ajax({
    url: config.apiUrl + `/videos/fortyfive/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const fortyfiveMinInt = () => {
  console.log('FortyfiveMinInt running')
  return $.ajax({
    url: config.apiUrl + `/videos/fortyfive/intermediate`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sixtyMinAll = () => {
  console.log('SixtyMinAll running')
  return $.ajax({
    url: config.apiUrl + `/videos/sixty/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sixtyMinInt = () => {
  console.log('sixtyMinInt running')
  return $.ajax({
    url: config.apiUrl + `/videos/sixty/intermediate`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  thirtyMinAll,
  thirtyMinInt,
  fortyfiveMinAll,
  fortyfiveMinInt,
  sixtyMinAll,
  sixtyMinInt
}
