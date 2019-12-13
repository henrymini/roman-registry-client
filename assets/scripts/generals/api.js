'use strict'

const config = require('../config')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/generals',
    method: 'GET'
  })
}

const show = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals/' + formData.general.id,
    method: 'GET'
  })
}

const destroy = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals/' + formData.general.id,
    method: 'DELETE'
  })
}

const update = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals/' + formData.general.id,
    method: 'PATCH',
    data: formData
  })
}

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
