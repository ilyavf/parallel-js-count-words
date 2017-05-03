const Task = require('data.task')
const log = require('../logger')

// testTask :: a -> Task b
const testTask = data =>
  Task.of(data.length)
  .map(log('testTask'))

module.exports = testTask