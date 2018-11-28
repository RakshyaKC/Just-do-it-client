'user strict'
const store = require('../store.js')

const resetSignUp = () => {
  const x = document.getElementById('sign-up')
  x.reset()
}

const resetSignIn = () => {
  const x = document.getElementById('sign-in')
  x.reset()
}

const resetChangePassword = () => {
  const x = document.getElementById('change-password')
  x.reset()
}

const signUpSuccess = data => {
  $('#unAuthedMessage').html(`Sign up was successful. Sign in to start yoga-along!`)
  resetSignUp()
}

const signUpFailure = () => {
  $('#unAuthedMessage').html(`Sorry, sign up was unsuccessful. Try again.`)
  // console.log('signUpFailure ran. Error is :', error)
  resetSignUp()
}

const signInSuccess = data => {
  store.user = data.user
  resetSignIn()
  $('#unAuthedMessage').html('')
  $('#navbar').show()
  $('#to-start').hide()
  console.log('signInSuccess ran. Data is :', data)
  $('#username').html(`Welcome back ${data.user.email}`)
  $('#update-fitness').find(':selected').text(data.user.fitness)
  if (data.user.fitness === 'Intermediate') {
    $('#option1').text('Intermediate')
    $('#option2').text('All levels')
  } else if (data.user.fitness === 'All levels') {
    $('#option1').text('All levels')
    $('#option2').text('Intermediate')
  }
}

const signInFailure = () => {
  $('#unAuthedMessage').html(`Sorry, sign in was unsuccessful. Try again.`)
  // console.log('signInFailure ran. Error is :', error)
  resetSignIn()
}

const changePasswordSuccess = data => {
  // console.log('changePasswordSuccess ran. Data is :', data)
  $('#authedMessage').html(`Congratulations! Password was changed successfully!`)
  resetChangePassword()
}
const changePasswordFailure = () => {
  // console.log('changePasswordFailure ran. Error is :', error)
  $('#authedMessage').html(`Sorry password couldn't be changed. Try again!`)
  resetChangePassword()
}

const signOutSuccess = () => {
  // console.log('signOutSuccess ran.')
  store.user.token = []
  $('#username').html('Username')
  $('#navbar').hide()
  $('#to-start').show()
}

const signOutFailure = (error) => {
  $('#authedMessage').html(`Sorry, sign out was unsuccessful. Try again.`)
  console.log('signOutFailure ran. Error is :', error)
}

const deleteSuccess = () => {
  console.log('deleteSuccess ran')
}
const deleteFailure = () => {
  console.log('deleteFailure ran')
}

const updateFitnessSuccess = () => {
  console.log('updateFitnessSuccess ran')
}

const updateFitnessFailure = () => {
  console.log('updateFitnessFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  deleteSuccess,
  deleteFailure,
  updateFitnessSuccess,
  updateFitnessFailure
}
