// execTask :: Task a -> IO()
let start;
const execTask = task =>
(
  start = Date.now(),
  task
  .fork(e => console.log('error: ', e),
        x => {
          const time = (Date.now() - start) / 1000
          console.log(`Exec: took ${time} seconds. \nResult: `, x)
        })
)

module.exports = execTask
