const Task = require('data.task');

// mapper :: List a -> (a -> Task b) -> Task List b
const mapper = (list, fTask) =>
  list.traverse(Task.of, fTask)

module.exports = mapper