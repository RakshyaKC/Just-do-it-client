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

const hideBackgroundVideo = () => {
  $('#bgVideo').css('display', 'none')
}

const signInSuccess = data => {
  store.user = data.user
  resetSignIn()
  hideBackgroundVideo()
  $('#unAuthedMessage').html('')
  // $('#navbar').show()
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
  $('#bgVideo').css('display', 'block')
  $('#authedView').hide()
  $('#unAuthedView').show()
}

const signOutFailure = (error) => {
  $('#authedMessage').html(`Sorry, sign out was unsuccessful. Try again.`)
  console.log('signOutFailure ran. Error is :', error)
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

const updateFitnessSuccess = () => {
  $('#authedMessage').html(`Fitness updated`)
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
