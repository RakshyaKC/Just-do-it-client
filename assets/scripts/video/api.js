'use strict'
const config = require('../config.js')
const store = require('../store.js')

const thirtyMinAll = data => {
  console.log('api.thirtyMinAll running')
  return $.ajax({
    url: config.apiUrl + `/videos/thirty/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const thirtyMinInt = data => {
  console.log('api.thirtyMinAll running')
  return $.ajax({
    url: config.apiUrl + `/videos/thirty/intermediate`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const fortyfiveMinAll = () => {
  console.log('api.FortyfiveMinAll running')
  return $.ajax({
    url: config.apiUrl + `/videos/fortyfive/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const fortyfiveMinInt = () => {
  console.log('api.FortyfiveMinInt running')
  return $.ajax({
    url: config.apiUrl + `/videos/fortyfive/intermediate`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sixtyMinAll = () => {
  console.log('api.sixtyMinAll running')
  return $.ajax({
    url: config.apiUrl + `/videos/sixty/alllevels`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sixtyMinInt = () => {
  console.log('api.sixtyMinInt running')
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
