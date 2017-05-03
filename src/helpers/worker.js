const Task = require('data.task')

// create :: String -> Task Worker
const create =  url =>
  new Task((reject, resolve) => {
    const worker = new window.Worker(System.stealURL + '?main=' + url)
    worker.onmessage = ev => {
      ev.data === 'ready'
      resolve(worker)
    }
  })

// runTask :: Worker -> String -> a -> Task b
const runTask = (worker, taskUrl) => taskData => {
  console.log('runTask', arguments)
  return new Task((reject, resolve) => {
    console.log('runTask.task for ' + taskData)
    worker.onmessage = ev => {
      console.log(`runTask.task.onmessage for taskData=${taskData}`, ev.data)
      if (ev.data && ev.data.type === 'taskResult') {
        console.log('Worker returned a taskResult', ev.data.result)
        // TODO: should the worker be returned here as well?
        resolve(ev.data.result)
      }
    }
    worker.postMessage({
      type: 'runTask',
      taskUrl,
      taskData
    })
  })
}

module.exports = {
  create,
  runTask
}
