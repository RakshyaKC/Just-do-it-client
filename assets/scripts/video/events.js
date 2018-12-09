'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onThirtyMin = event => {
  // console.log('onThirtyMin running')
  // check data.user.fitness and direct appropriately
  if (store.fitness == null) {
    if (store.user.fitness === 'All levels') {
      api.thirtyMinAll()
        .then(ui.thirtyMinAllSuccess)
        .catch(ui.thirtyMinAllFailure)
    } else if (store.user.fitness === 'Intermediate') {
      api.thirtyMinInt()
        .then(ui.thirtyMinIntSuccess)
        .catch(ui.thirtyMinIntFailure)
    }
  } else if (store.fitness === 'All levels') {
    api.thirtyMinAll()
      .then(ui.thirtyMinAllSuccess)
      .catch(ui.thirtyMinAllFailure)
  } else if (store.fitness === 'Intermediate') {
    api.thirtyMinInt()
      .then(ui.thirtyMinIntSuccess)
      .catch(ui.thirtyMinIntFailure)
  }
}
// check above code before adding it to below functions

const onFortyfiveMin = event => {
  // console.log('onFortyfiveMin running')
  if (store.fitness == null) {
    if (store.user.fitness === 'All levels') {
      api.fortyfiveMinAll()
        .then(ui.fortyfiveMinAllSuccess)
        .catch(ui.fortyfiveMinAllFailure)
    } else if (store.user.fitness === 'Intermediate') {
      api.fortyfiveMinInt()
        .then(ui.fortyfiveMinIntSuccess)
        .catch(ui.fortyfiveMinIntFailure)
    }
  } else if (store.fitness === 'All levels') {
    api.fortyfiveMinAll()
      .then(ui.fortyfiveMinAllSuccess)
      .catch(ui.fortyfiveMinAllFailure)
  } else if (store.fitness === 'Intermediate') {
    api.fortyfiveMinInt()
      .then(ui.fortyfiveMinIntSuccess)
      .catch(ui.fortyfiveMinIntFailure)
  }
}

const onSixtyMin = event => {
  // console.log('onSixtyMin running')
  if (store.fitness == null) {
    if (store.user.fitness === 'All levels') {
      api.sixtyMinAll()
        .then(ui.sixtyMinAllSuccess)
        .catch(ui.sixtyMinAllFailure)
    } else if (store.user.fitness === 'Intermediate') {
      api.sixtyMinInt()
        .then(ui.sixtyMinIntSuccess)
        .catch(ui.sixtyMinIntFailure)
    }
  } else if (store.fitness === 'All levels') {
    api.sixtyMinAll()
      .then(ui.sixtyMinAllSuccess)
      .catch(ui.sixtyMinAllFailure)
  } else if (store.fitness === 'Intermediate') {
    api.sixtyMinInt()
      .then(ui.sixtyMinIntSuccess)
      .catch(ui.sixtyMinIntFailure)
  }
}

const onCreateInvitation = () => {
  event.preventDefault()
  const videoId = store.currentVid.id
  const inviteeEmail = $('#invitee').val()
  // const createInvitation ({ invitee: inviteeEmail, video: videoId })
  // api call to Server
  api.createInvitation({ invitee: inviteeEmail, video_id: videoId })
    .then(ui.createInvitationSuccess)
    .catch(ui.createInvitationFailure)
}

module.exports = {
  onThirtyMin,
  onFortyfiveMin,
  onSixtyMin,
  onCreateInvitation
}
