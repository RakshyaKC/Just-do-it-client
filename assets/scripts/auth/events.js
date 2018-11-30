'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const toSignIn = event => {
  event.preventDefault()
  $('#sign-in').show()
  $('#sign-up').hide()
}
const toSignUp = event => {
  event.preventDefault()
  $('#sign-in').hide()
  $('#sign-up').show()
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onDeleteAccount = event => {
  event.preventDefault()
  api.deleteAccount()
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const onUpdateFitness = event => {
  // console.log(event)
  // console.log(event.target.value)
  event.preventDefault()
  // If store.fitness has a value, then use below code
  // if (store.fitness )
  // console.log(`Is store.fitness empty?: ${store.fitness}`)
  if (store.fitness == null) {
    if (event.target.value !== store.user.fitness) {
      api.updateFitness(event.target.value)
        .then(ui.updateFitnessSuccess)
        .catch(ui.updateFitnessFailure)
    }
  } else if (event.target.value !== store.fitness) {
    api.updateFitness(event.target.value)
      .then(ui.updateFitnessSuccess)
      .catch(ui.updateFitnessFailure)
  }
}

module.exports = {
  toSignIn,
  toSignUp,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onDeleteAccount,
  onUpdateFitness
}
