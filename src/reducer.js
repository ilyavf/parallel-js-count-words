const Task = require('data.task')

// asyncSum :: Number -> Number -> Task Number
const asyncSum = a => b => Task.of(a + b)

// reducer :: (b -> a -> Task b) -> List a -> Task b
// const reducer = f => list =>
//   list.reduce




