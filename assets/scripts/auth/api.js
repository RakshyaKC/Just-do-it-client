'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + `/change-password`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + `/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAccount = () => {
  return $.ajax({
    url: config.apiUrl + `/delete`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Data is
// user: {id: 1, email: "rk@rk.com", token:""}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  deleteAccount
}
