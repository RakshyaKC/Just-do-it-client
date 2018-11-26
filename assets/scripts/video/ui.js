'user strict'
// const store = require('../store.js')

const thirtyMinSuccess = event => {
  console.log('watch the 30 min video')
}
const thirtyMinFailure = (error) => {
  console.log('thirtyMinFailure ran. Error is :', error)
}
const fortyfiveMinSuccess = () => {
  console.log(`let's watch the 45 min video`)
}
const fortyfiveMinFailure = (error) => {
  console.log('fortyfiveyMinFailure ran. Error is :', error)
}
const sixtyMinSuccess = () => {
  console.log(`let's watch the 60 min video`)
}
const sixtyMinFailure = (error) => {
  console.log('sixtyMinFailure ran. Error is :', error)
}

module.export = {
  thirtyMinSuccess,
  thirtyMinFailure,
  fortyfiveMinSuccess,
  fortyfiveMinFailure,
  sixtyMinSuccess,
  sixtyMinFailure
}
