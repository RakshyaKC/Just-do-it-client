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
  $('#bgVideo').css('display', 'none')
  console.log(data.user.fitness)
  $('#unAuthedMessage').html('')
  $('#unAuthedView').hide()
  $('#authedView').show()
  // console.log('signInSuccess ran. Data is :', data)
  $('#username').html(`Welcome back ${data.user.email}`)
  const time = Date.parse(data.user.created_at)
  const timePassed = Date.now() - time
  const numDays = Math.round(timePassed / (24 * 60 * 60 * 1000))
  $('#account-age').html(`You started this journey ${numDays} days ago.`)
  $('#select-fitness').val(data.user.fitness)
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
  $('#startWorkout').hide()
  $('#time').show('')
  $('#bgVideo').css('display', 'block')
  $('#authedView').hide()
  $('#unAuthedView').show()
  $('#authedMessage').html('')
  $('#unAuthedMessage').html('')
}

const signOutFailure = () => {
  $('#authedMessage').html(`Sorry, sign out was unsuccessful. Try again.`)
  // console.log('signOutFailure ran. Error is :', error)
}

const deleteSuccess = () => {
  $('#bgVideo').css('display', 'block')
  $('#authedView').hide()
  $('#unAuthedView').show()
  $('#unAuthedMessage').html('Sorry to see you go')
}

const deleteFailure = error => {
  $('#authedMessage').html(`Sorry, account deletion was unsuccessful. Try again. Error is ${error}`)
}

const updateFitnessSuccess = (event) => {
  $('#authedMessage').html(`Fitness updated`)
  console.log(event)
  store.fitness = event.user.fitness
  console.log(store.fitness)
}

const updateFitnessFailure = error => {
  $('#authedMessage').html(`Sorry, your fitness couldn't be updated. Try again. Error is ${error}`)
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
