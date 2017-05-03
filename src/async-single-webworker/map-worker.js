const Task = require('data.task')

// mapAsync :: (a -> Task b) -> List a -> Task List b
const mapWorker = (url, list) =>
  list.traverse(Task.of, Task.of())

module.exports = mapWorker
