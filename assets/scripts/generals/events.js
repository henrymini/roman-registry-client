'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetGenerals = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onFailure)
}

const onGetGeneral = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.show(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onFailure)
}

const onDeleteGeneral = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.destroy(formData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onFailure)
}

const onUpdateGeneral = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

const onCreateGeneral = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('console log is:', formData)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const addHandlers = event => {
  $('#general-index').on('click', onGetGenerals)
  $('#general-show').on('submit', onGetGeneral)
  $('#general-delete').on('submit', onDeleteGeneral)
  $('#general-update').on('submit', onUpdateGeneral)
  $('#general-create').on('submit', onCreateGeneral)
}

module.exports = {
  addHandlers
}
