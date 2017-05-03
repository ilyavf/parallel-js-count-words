const Task = require('data.task');

onmessage = function (ev) {
  switch (ev.data.type) {
    case 'runTask':
      runTask(ev.data.taskUrl, ev.data.taskData)
  }
}

// runTask :: String -> a -> IO()
const runTask = (url, data) =>
  loadModule(url)
  .chain(m => m(data))
  .fork(e => console.log(e),
        result => postMessage({
          type: 'taskResult',
          result
        })
  )

// loadModule :: String -> Task m
const loadModule = url =>
  new Task((reject, resolve) =>
    steal.import(url).then(resolve)
  )

postMessage('ready')