/* eslint-env serviceworker */

const Task = require('data.task')

// Note: self is worker's `DedicatedWorkerGlobalScope`.
self.onmessage = function (ev) {
  switch (ev.data.type) {
    case 'runTask':
      runTask(ev.data.taskUrl, ev.data.taskData)
      break
    case 'ping':
      self.postMessage('pong')
      break
    default:
      console.log('Worker: not sure what to do with this task: ' + ev.data.type, ev.data);
  }
}

// runTask :: String -> a -> IO()
const runTask = (url, data) =>
  loadModule(url)
  .chain(m => m(data))
  .fork(e => console.log(e),
        result => self.postMessage({
          type: 'taskResult',
          result
        })
  )

// loadModule :: String -> Task m
const loadModule = url =>
  new Task((reject, resolve) =>
    self.steal.import(url).then(resolve)
  )

self.postMessage('ready')
