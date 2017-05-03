const { create, runTask } = require('../worker');
const execTask = require('../exec')

const worker = create('src/async-single-webworker/worker')
console.log('test-worker: worker is ' + typeof worker, worker);

const data = [1, 2, 3, 4, 5]

const app =
  runTask(worker, 'src/helpers/test/task', data)

execTask(app)