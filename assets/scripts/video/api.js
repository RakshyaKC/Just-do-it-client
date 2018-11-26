'use strict'
const config = require('../config.js')
const store = require('../store.js')

const thirtyMin = data => {
  // console.log('Token inside video/api.js is ' + store.user.token)
  // console.log(config.apiUrl + `/videos`)
  return $.ajax({
    url: config.apiUrl + `/videos`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const fortyfiveMin = () => {
// }
// const sixtyMin = () => {
// }
//
module.exports = {
  thirtyMin
//   fortyfiveMin,
//   sixtyMin
}
