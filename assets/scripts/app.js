'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const videoEvents = require('./video/events.js')

$(() => {
  // prior to authentication
  $('#switch-to-sign-in').on('click', authEvents.toSignIn)
  $('#switch-to-sign-up').on('click', authEvents.toSignUp)
  // authentication event handlers
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#delete').on('click', () => $('#delete-modal').modal('show'))
  $('#delete-account').on('click', authEvents.onDeleteAccount)
  // fitness level update handler
  $('#select-fitness').on('change', authEvents.onUpdateFitness)
  // video access event handlers
  $('#thirty-min').on('click', videoEvents.onThirtyMin)
  $('#fortyfive-min').on('click', videoEvents.onFortyfiveMin)
  $('#sixty-min').on('click', videoEvents.onSixtyMin)
})
