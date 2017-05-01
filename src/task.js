// You can use `.chain` to sequence two asynchronous actions, and
// `.map` to perform a synchronous computation with the eventual
// value of the Task.

const Task = require('data.task')

// asyncHello :: String -> Task
const asyncHello = (name) => {
  return new Task((reject, resolve) => {
    resolve('hello ' + name)
  })
}

const app =
  asyncHello('world')
  .chain(asyncHello)
  .map(c => c.toUpperCase())

app.fork(e => console.error(e),
         x => console.log('x: ', x))
