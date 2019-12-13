'use strict'

const onIndexSuccess = responseData => {
  $('#general-display').val('')
  $('#general-display').val('')
  responseData.generals.forEach(general => {
    const generalHTML = (`
        <h4>Name: ${general.name}</h4>
        <p>Age: ${general.age}</p>
        <p>Family: ${general.family}</p>
        <br>
      `)
    $('#general-display').append(generalHTML)
  })
}

const onShowSuccess = responseData => {
  $('#general-display').val('')
  const generalHTML = (`
    <h4>Name: ${responseData.general.name}</h4>
    <p>Age: ${responseData.general.age}</p>
    <p>Age: ${responseData.general.family}</p>
    <br>
    `)
  $('#general-display').html(generalHTML)
  $('form').trigger('reset')
}

const onDeleteSuccess = () => {
  $('#general-display').val('')
  $('#message').val('successful removed')
  $('form').trigger('reset')
}

const onUpdateSuccess = () => {
  $('#general-display').val('successful updated')
  $('form').trigger('reset')
}

const onCreateSuccess = () => {
  $('#general-display').val('successful created')
  $('form').trigger('reset')
}

const onFailure = error => {
  console.log(error)
  $('#general-display').val('failure')
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onFailure
}
