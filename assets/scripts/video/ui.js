'user strict'
const store = require('../store.js')

const thirtyMinAllSuccess = function (data) {
  // console.log(data)
  const videos = data.videos
  // console.log(videos)
  const currentVid = videos[Math.floor(Math.random() * videos.length)]
  const randomUrl = currentVid.url
  store.currentVid = currentVid
  // console.log(`I am the random value: ${randomUrl}`)
  // console.log('watch this 30 min all levels video')
  // will need to randomly select one of the object
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const thirtyMinIntSuccess = function (data) {
  // console.log(data)
  const videos = data.videos
  // console.log(`I am the random value: ${randomUrl}`)
  const currentVid = videos[Math.floor(Math.random() * videos.length)]
  const randomUrl = currentVid.url
  store.currentVid = currentVid
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const fortyfiveMinAllSuccess = (data) => {
  // console.log(`let's watch the 45 min All levels video`)
  // console.log(data)
  const videos = data.videos
  // console.log(`I am the random value: ${randomUrl}`)
  const currentVid = videos[Math.floor(Math.random() * videos.length)]
  const randomUrl = currentVid.url
  store.currentVid = currentVid
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const fortyfiveMinIntSuccess = (data) => {
  // console.log(data)
  const videos = data.videos
  // console.log(videos)
  const currentVid = videos[Math.floor(Math.random() * videos.length)]
  const randomUrl = currentVid.url
  store.currentVid = currentVid
  // console.log(`I am the random value: ${randomUrl}`)
  // console.log(`let's watch the 45 min Int levels video`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const sixtyMinAllSuccess = (data) => {
  // console.log(`let's watch the 60 min All levels video`)
  // console.log(data)
  const videos = data.videos
  // console.log(videos)
  const currentVid = videos[Math.floor(Math.random() * videos.length)]
  const randomUrl = currentVid.url
  store.currentVid = currentVid
  // console.log(`I am the random value: ${randomUrl}`)
  // console.log(`let's watch the 45 min Int levels video`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const sixtyMinIntSuccess = (data) => {
  // console.log(`let's watch the 60 min Intermediate level video`)
  // console.log(data)
  const videos = data.videos
  // console.log(videos)
  const currentVid = videos[Math.floor(Math.random() * videos.length)]
  const randomUrl = currentVid.url
  store.currentVid = currentVid
  // console.log(`I am the random value: ${randomUrl}`)
  // console.log(`let's watch the 45 min Int levels video`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const createInvitationSuccess = (data) => {
  console.log(data)
  // store.videos = data.videos
  // console.log('running createInvitationSuccess')
  $('#authedMessage').html(`The user has been invited to join you in watching this video.`)
}

// Failure ui handlers below here

const thirtyMinAllFailure = () => {
  $('#authedMessage').html(`Sorry we couldn't retrieve the video you asked for. Please try again`)
  // console.log('thirtyMinAllFailure ran. Error is :', error)
}

const thirtyMinIntFailure = () => {
  $('#authedMessage').html(`Sorry we couldn't retrieve the video you asked for. Please try again`)
  // console.log('thirtyMinIntFailure ran. Error is :', error)
}

const fortyfiveMinAllFailure = () => {
  $('#authedMessage').html(`Sorry we couldn't retrieve the video you asked for. Please try again`)
  // console.log('fortyfiveyMinAllFailure ran. Error is :', error)
}

const fortyfiveMinIntFailure = () => {
  $('#authedMessage').html(`Sorry we couldn't retrieve the video you asked for. Please try again`)
  // console.log('fortyfiveyMinIntFailure ran. Error is :', error)
}

const sixtyMinAllFailure = () => {
  $('#authedMessage').html(`Sorry we couldn't retrieve the video you asked for. Please try again`)
  // console.log('sixtyMinAllFailure ran. Error is :', error)
}

const sixtyMinIntFailure = () => {
  $('#authedMessage').html(`Sorry we couldn't retrieve the video you asked for. Please try again`)
  // console.log('sixtyMinIntFailure ran. Error is :', error)
}

const createInvitationFailure = () => {
  // console.log('running createInvitationFailure')
  // console.log(error)
  $('#authedMessage').html(`This user does not have an account yet, but we have invited them to the site.`)
}

module.exports = {
  thirtyMinAllSuccess,
  thirtyMinIntSuccess,
  fortyfiveMinAllSuccess,
  fortyfiveMinIntSuccess,
  sixtyMinAllSuccess,
  sixtyMinIntSuccess,
  createInvitationSuccess,
  // failure messages below
  thirtyMinAllFailure,
  thirtyMinIntFailure,
  fortyfiveMinAllFailure,
  fortyfiveMinIntFailure,
  sixtyMinAllFailure,
  sixtyMinIntFailure,
  createInvitationFailure
}
