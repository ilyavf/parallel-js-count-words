const Task = require('data.task')

// TYPES:
// ReducerAsync a b = a -> b -> Task a

// asyncSum :: Number -> Number -> Task Number
// const asyncSum = a => b => Task.of(a + b)

// reduceAsync :: ReducerAsync b a -> b -> List a -> Task b
const reduceAsync = reducer => initialValue => list =>
  list.size === 0
    ? Task.of(initialValue)
    : reducer(initialValue)(list.first()).chain(a => reduceAsync(reducer)(a)(list.shift()))

module.exports = reduceAsync
