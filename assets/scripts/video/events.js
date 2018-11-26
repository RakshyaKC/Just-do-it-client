'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onThirtyMin = event => {
  event.preventDefault()
  // console.log('onThirtyMin running')
  api.thirtyMin()
    .then(ui.thirtyMinSuccess)
    .catch(ui.thirtyMinFailure)
}

const onFortyfiveMin = event => {
  event.preventDefault()
  console.log('onFortyfiveMin running')
  api.fortyfiveMin()
    .then(ui.fortyfiveMinSuccess)
    .catch(ui.fortyfiveMinFailure)
}
//
// const onSixtyMin = event => {
//   event.preventDefault()
//   console.log(event)
//   api.sixtyMin()
//     .then(ui.sixtyMinSuccess)
//     .catch(ui.sixtyMinFailure)
// }
module.exports = {
  onThirtyMin,
  onFortyfiveMin
  // onSixtyMin
}
