const Task = require('data.task')

module.exports = {
  create: function (url) {
    return new window.Worker(System.stealURL + '?main=' + url)
  },
  // runTask :: Worker -> String -> a -> Task b
  runTask: function (worker, taskUrl, taskData) {
    console.log('runTask', arguments)
    return new Task((reject, resolve) => {
      console.log('runTask.task')
      worker.onmessage = ev => {
        console.log('runTask.task.onmessage', ev.data)
        if (ev.data && ev.data === 'ready') {
          worker.postMessage({
            type: 'runTask',
            taskUrl,
            taskData
          })
        }
        if (ev.data && ev.data.type === 'taskResult') {
          resolve(ev.data.result)
          // TODO: dont terminate a worker instead reuse it for another task.
          worker.terminate()
        }
      }
    })
  }
}
