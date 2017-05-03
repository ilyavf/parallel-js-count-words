const Task = require('data.task')
const log = require('../logger')

const throwException = () => {
  throw Error('test error to fail a worker')
}

// testTask :: a -> Task b
const testTask = data =>
  // do any asynchronous actions here:
  Task.of(data.length)
  .map(log('testTask'))
  // .map(throwException)

module.exports = testTask
