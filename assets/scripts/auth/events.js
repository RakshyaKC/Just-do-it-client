'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
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
  console.log(event)
  event.preventDefault()
  console.log(store.user.fitness)
  console.log(event.target.value)
  // console.log('function onUpdateFitnes')
  // const option = $('#option2').text()
  // console.log(option)
  // if (store.user.fitness === $('#option2').text()) {
  api.updateFitness(event.target.value)
    .then(ui.updateFitnessSuccess)
    .catch(ui.updateFitnessFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onDeleteAccount,
  onUpdateFitness
}
