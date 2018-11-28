'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const videoEvents = require('./video/events.js')

$(() => {
  // authentication event handlers
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#delete').on('click', authEvents.onDeleteAccount)
  // fitness level update handler
  $('#update-fitness').on('change', authEvents.onUpdateFitness)
  // video access event handlers
  $('#thirty-min').on('click', videoEvents.onThirtyMin)
  $('#fortyfive-min').on('click', videoEvents.onFortyfiveMin)
  $('#sixty-min').on('click', videoEvents.onSixtyMin)
})
