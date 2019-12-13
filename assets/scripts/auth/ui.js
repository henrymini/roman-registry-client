'use strict'
const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('input').val('')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('input').val('')
}

const onSignUpSuccess = () => {
  onSuccess('salve imperator')
}

const onSignUpFailure = () => {
  onFailure('something goofed')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('memento mori')
}

const onSignInFailure = () => {
  onFailure('something goofed')
}

const onChangePasswordSuccess = () => {
  onSuccess('you have changed your password')
}

const onChangePasswordFailure = () => {
  onFailure('you have not changed your password')
}

const onSignoutSuccess = responseData => {
  store.user = store
  onSuccess('valedico')
}

const onSignoutFailure = () => {
  onFailure('not yet magister')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}
