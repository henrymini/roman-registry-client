'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signout(formData)
    .then(ui.onSignoutSuccess)
    .catch(ui.onSignoutFailure)
}

const addHandlers = event => {
  $('#signup').on('submit', onSignUp)
  $('#signin').on('submit', onSignIn)
  $('#changepw').on('submit', onChangePassword)
  $('#signout').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
