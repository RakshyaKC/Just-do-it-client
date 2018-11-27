'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onThirtyMin = event => {
  console.log('onThirtyMin running')
  api.thirtyMin()
    .then(ui.thirtyMinSuccess, console.log(event))
    .catch(ui.thirtyMinFailure)
}

const onFortyfiveMin = event => {
  console.log('onFortyfiveMin running')
  api.fortyfiveMin()
    .then(ui.fortyfiveMinSuccess)
    .catch(ui.fortyfiveMinFailure)
}

const onSixtyMin = event => {
  console.log('onSixtyMin running')
  api.sixtyMin()
    .then(ui.sixtyMinSuccess)
    .catch(ui.sixtyMinFailure)
}

module.exports = {
  onThirtyMin,
  onFortyfiveMin,
  onSixtyMin
}
