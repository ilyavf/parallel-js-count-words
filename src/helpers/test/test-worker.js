const { create, runTask } = require('../worker')
const execTask = require('../exec')

console.log('test-worker')

const data = [1, 2, 3, 4, 5]

const app =
  create('src/async-single-webworker/worker')
  .chain(worker => runTask(worker, 'src/helpers/test/task')(data))


execTask(app)
