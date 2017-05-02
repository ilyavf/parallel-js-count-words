const Task = require('data.task')

// asyncSum :: Number -> Number -> Task Number
const asyncSum = a => b => Task.of(a + b)

// reducer :: (b -> a -> Task b) -> a -> List a -> Task b
const reducer = fn => initialValue => list =>
  list.size === 0
    ? Task.of(initialValue)
    : fn(initialValue)(list.first()).chain(a => reducer(fn)(a)(list.shift()))

module.exports = reducer
