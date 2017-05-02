const Task = require('data.task')

// TYPES:
// ReducerAsync a b = b -> a -> Task b

// reduceAsync :: ReducerAsync b a -> b -> List a -> Task b
const reduce = reducer => initialValue => list =>
  list.size === 0
    ? Task.of(initialValue)
    : reducer(initialValue)(list.first()).chain(a => reduce(reducer)(a)(list.shift()))

// reduceAsync :: ReducerAsync b a -> Task List a -> Task b
reduceAsync = (reducer, listTask) =>
  listTask.chain(reduce(reducer)(reducer.initialValue))

module.exports = reduceAsync
