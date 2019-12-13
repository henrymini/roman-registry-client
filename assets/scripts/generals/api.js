'use strict'

const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/generals',
    method: 'GET'
  })
}

const show = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals/' + formData.general.id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const destroy = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals/' + formData.general.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = formData => {
  console.log('console log is' + store.user.token)
  return $.ajax({
    url: config.apiUrl + '/generals',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const update = formData => {
  return $.ajax({
    url: config.apiUrl + '/generals/' + formData.general.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
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
