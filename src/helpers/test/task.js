const Task = require('data.task')
const log = require('../logger')

// testTask :: a -> Task b
const testTask = data =>
  // do any asynchronous actions here:
  Task.of(data.length)
  .map(log('testTask'))

module.exports = testTask
