// execTask :: Task(a) -> IO()
const execTask = t =>
  t.fork(e => console.log('error: ', e),
    x => console.log('Exec: ', x))

module.exports = execTask
