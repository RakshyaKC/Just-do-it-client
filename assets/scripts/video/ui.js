'user strict'
// const store = require('../store.js')

const thirtyMinAllSuccess = function (data) {
  console.log(data)
  const videos = data.videos
  console.log(videos)
  const randomUrl = videos[Math.floor(Math.random() * videos.length)].url
  console.log(`I am the random value: ${randomUrl}`)
  console.log('watch this 30 min all levels video')
  // will need to randomly select one of the object
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const thirtyMinIntSuccess = function (data) {
  console.log(data)
  const videos = data.videos
  const randomUrl = videos[Math.floor(Math.random() * videos.length)].url
  console.log(`I am the random value: ${randomUrl}`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const fortyfiveMinAllSuccess = (data) => {
  console.log(`let's watch the 45 min All levels video`)
  console.log(data)
  const videos = data.videos
  const randomUrl = videos[Math.floor(Math.random() * videos.length)].url
  console.log(`I am the random value: ${randomUrl}`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const fortyfiveMinIntSuccess = (data) => {
  console.log(data)
  const videos = data.videos
  console.log(videos)
  const randomUrl = videos[Math.floor(Math.random() * videos.length)].url
  console.log(`I am the random value: ${randomUrl}`)
  console.log(`let's watch the 45 min Int levels video`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const sixtyMinAllSuccess = (data) => {
  console.log(`let's watch the 60 min All levels video`)
  console.log(data)
  const videos = data.videos
  console.log(videos)
  const randomUrl = videos[Math.floor(Math.random() * videos.length)].url
  console.log(`I am the random value: ${randomUrl}`)
  console.log(`let's watch the 45 min Int levels video`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
}

const sixtyMinIntSuccess = (data) => {
  console.log(`let's watch the 60 min Intermediate level video`)
  console.log(data)
  const videos = data.videos
  console.log(videos)
  const randomUrl = videos[Math.floor(Math.random() * videos.length)].url
  console.log(`I am the random value: ${randomUrl}`)
  console.log(`let's watch the 45 min Int levels video`)
  $('#workout-video').attr('src', randomUrl)
  $('#time').hide()
  $('#startWorkout').show()
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

module.exports = {
  thirtyMinAllSuccess,
  thirtyMinIntSuccess,
  fortyfiveMinAllSuccess,
  fortyfiveMinIntSuccess,
  sixtyMinAllSuccess,
  sixtyMinIntSuccess,
  // failure messages below
  thirtyMinAllFailure,
  thirtyMinIntFailure,
  fortyfiveMinAllFailure,
  fortyfiveMinIntFailure,
  sixtyMinAllFailure,
  sixtyMinIntFailure
}
