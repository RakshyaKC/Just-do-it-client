'user strict'
// const store = require('../store.js')

const thirtyMinAllSuccess = function (data) {
  console.log('watch this 30 min all levels video')
  // will need to randomly select one of the object
  console.log(data.videos)
  const url = data.videos[0].url
  console.log(url)
  $('#workout-video').attr('src', url)
}
const thirtyMinAllFailure = (error) => {
  console.log('thirtyMinAllFailure ran. Error is :', error)
}

const thirtyMinIntSuccess = function (data) {
  console.log('watch this 30 min intermediate video')
  // will need to randomly select one of the object
  console.log(data.videos)
  const url = data.videos[0].url
  console.log(url)
}

const thirtyMinIntFailure = (error) => {
  console.log('thirtyMinIntFailure ran. Error is :', error)
}
// Need 4 for each type. Total
const fortyfiveMinAllSuccess = (data) => {
  console.log(`let's watch the 45 min All levels video`)
  console.log(data)
}
const fortyfiveMinAllFailure = (error) => {
  console.log('fortyfiveyMinAllFailure ran. Error is :', error)
}

const fortyfiveMinIntSuccess = () => {
  console.log(`let's watch the 45 min Int levels video`)
}

const fortyfiveMinIntFailure = (error) => {
  console.log('fortyfiveyMinIntFailure ran. Error is :', error)
}
const sixtyMinAllSuccess = (data) => {
  console.log(`let's watch the 60 min All levels video`)
  console.log(data)
}
const sixtyMinAllFailure = (error) => {
  console.log('sixtyMinAllFailure ran. Error is :', error)
}

const sixtyMinIntSuccess = (data) => {
  console.log(`let's watch the 60 min Intermediate level video`)
  console.log(data)
}
const sixtyMinIntFailure = (error) => {
  console.log('sixtyMinIntFailure ran. Error is :', error)
}

module.exports = {
  thirtyMinAllSuccess,
  thirtyMinAllFailure,
  thirtyMinIntSuccess,
  thirtyMinIntFailure,
  fortyfiveMinAllSuccess,
  fortyfiveMinAllFailure,
  fortyfiveMinIntSuccess,
  fortyfiveMinIntFailure,
  sixtyMinAllSuccess,
  sixtyMinAllFailure,
  sixtyMinIntSuccess,
  sixtyMinIntFailure
}
