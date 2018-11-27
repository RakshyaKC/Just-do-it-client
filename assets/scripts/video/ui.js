'user strict'
// const store = require('../store.js')

const thirtyMinSuccess = function (data) {
  console.log('watch this 30 min video')
  // will need to randomly select one of the object
  console.log(data.videos)
  const url = data.videos[0].url
  console.log(url)
  $('#workout-video').attr('src', url)
}
const thirtyMinFailure = (error) => {
  console.log('thirtyMinFailure ran. Error is :', error)
}
const fortyfiveMinSuccess = (data) => {
  console.log(`let's watch the 45 min video`)
  console.log(data)
}
const fortyfiveMinFailure = (error) => {
  console.log('fortyfiveyMinFailure ran. Error is :', error)
}
const sixtyMinSuccess = (data) => {
  console.log(`let's watch the 60 min video`)
  console.log(data)
}
const sixtyMinFailure = (error) => {
  console.log('sixtyMinFailure ran. Error is :', error)
}

module.exports = {
  thirtyMinSuccess,
  thirtyMinFailure,
  fortyfiveMinSuccess,
  fortyfiveMinFailure,
  sixtyMinSuccess,
  sixtyMinFailure
}
